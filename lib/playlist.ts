// This is the key identifing Hot Minute to Google API.
// It is meant for client side use and is OK to disclose
// to users.
const YT_API_KEY = process.env.VUE_APP_GOOGLE_API_KEY;

// Alternative title/author for a specific song. Confidence describes
// how sure we are that this is the right answer (higher is better)
type SongAlt = { title: string; author: string; confidence: number };

// A single song in the playlist. May have some alternative title-author
// options saved in alts to offer manual switches by the user.
type Song = { id: number; title: string; author: string; alts: SongAlt[] };

class Playlist {
  // The actual ID of the playlist (typically ~random string)
  id: string;

  // Title of the playlist describing it's contents
  name: string;

  // List of songs
  songs: Song[];

  // Am I currently loading data from Youtube API
  loading: boolean;

  constructor(id: string) {
    this.id = id;
    this.name = id;
    this.songs = [];
    this.loading = false;
  }

  // Convert whole playlist for storage into vuex store and to insert
  // into wordTree
  toJSON(): { key: string; name: string; items: string[] } {
    const result = {
      key: `bomb/${this.id}`,
      name: this.name,
      items: [] as string[],
    };
    this.songs.forEach(
      (song: Song) => result.items.push(`${song.author};${song.title}`),
    );
    return result;
  }

  // Given a string that is either a youtube link or a plain playlist ID
  // parsePlaylistId returns either a playlist ID or null if it thinks
  // the input is not valid.
  static parseId(linkOrId: string): string | null {
    let playlistId = linkOrId;
    if (playlistId.includes('youtube.')) {
      try {
        const ytURL = new URL(linkOrId);
        playlistId = ytURL.searchParams.get('list') || linkOrId;
      } catch {
        return null;
      }
    }
    const playlistRegex = /^[a-zA-Z0-9_-]{5,}$/;
    if (playlistRegex.test(playlistId)) {
      return playlistId;
    }
    return null;
  }

  // Fetches all playlist data from YouTube API
  async fetch(): Promise<Playlist> {
    this.loading = true;
    const [name, songs] = await Promise.all([this.fetchName(), this.fetchSongs(100)]);
    this.loading = false;
    this.name = name;
    this.songs = songs;
    return this;
  }

  // Fetches YouTube Playlist title from YT API
  async fetchName(): Promise<string> {
    const url = new URL('https://youtube.googleapis.com/youtube/v3/playlists');
    const params = new URLSearchParams({
      id: this.id,
      part: 'snippet',
      fields: 'items/snippet/title',
      key: YT_API_KEY,
    });
    url.search = params.toString();

    const response = await fetch(url.toString());
    const data = await response.json();
    if (data.items.length < 1) {
      throw new ReferenceError(`No playlist with id ${this.id}`);
    }
    return data.items[0].snippet.title;
  }

  // Fetches up to limit songs in a YT Playlist from YT API
  async fetchSongs(limit: number): Promise<Song[]> {
    const url = new URL('https://youtube.googleapis.com/youtube/v3/playlistItems');
    const params = new URLSearchParams({
      playlistId: this.id,
      part: 'snippet,contentDetails',
      fields: 'items/snippet(title,description),nextPageToken',
      key: YT_API_KEY,
      maxResults: Math.min(50, limit).toString(),
    });
    const allSongs = [];
    // Youtube has max page size of 50, so we might have to fetch multiple
    // pages to hit the limit or get the whole playlist
    do {
      url.search = params.toString();
      // eslint-disable-next-line no-await-in-loop
      const response = await fetch(url.toString());
      // eslint-disable-next-line no-await-in-loop
      const data = await response.json();

      const newSongs = data.items.map(Playlist.parseSong);
      allSongs.push(...newSongs);

      if (!data.nextPageToken) break;
      params.set('pageToken', data.nextPageToken);
      params.set('maxResults', Math.min(50, limit - allSongs.length).toString());
    } while (allSongs.length < limit);
    return allSongs;
  }

  // Given the API response for a single song it returnes a parsed Song object including
  // alternative title options.
  static parseSong(song: { snippet: { title: string; description: string } }, id: number): Song {
    const alts = Playlist.getSongAlts(song.snippet);
    alts.sort((a, b) => b.confidence - a.confidence);
    return {
      id,
      title: alts[0].title,
      author: alts[0].author,
      alts: alts.slice(0, 6),
    };
  }

  // Returns all possible titles and authors with confidence levels for a given
  // song, given its title and description.
  static getSongAlts(snippet: { title: string; description: string }): SongAlt[] {
    const isYTMusic = /^Provided to YouTube by /;
    const result = [];
    const origTitle = snippet.title.replace(/[([](official)? *(music)? *(video|audio)[)\]]/i, '');
    result.push({ title: origTitle, author: '', confidence: 1 });
    result.push({ title: '', author: origTitle, confidence: 0 });

    const descBlocks = snippet.description.split('\n\n');
    if (isYTMusic.test(descBlocks[0])) {
      const [title, ...authors] = descBlocks[1].split(' · ');
      const author = authors.join(' & ');
      result.push({ title, author, confidence: 100 });
      result.push({ title: author, author: title, confidence: 90 });
    }
    if (descBlocks[0].startsWith(origTitle) && descBlocks[0].includes(' · ')) {
      const [title, ...authors] = descBlocks[0].split(' · ');
      const author = authors.join(' & ');
      result.push({ title, author, confidence: 95 });
      result.push({ title: author, author: title, confidence: 89 });
    }
    if (/ [–-] /.test(origTitle)) {
      const [author, title] = origTitle.replace(' – ', ' - ').split(' - ', 2);
      result.push({ title, author, confidence: 85 });
      result.push({ author: title, title: author, confidence: 80 });
    } else if (origTitle.includes('-')) {
      const [author, title] = origTitle.split('-', 2);
      result.push({ title, author, confidence: 65 });
      result.push({ author: title, title: author, confidence: 60 });
    }
    if (origTitle.includes('|')) {
      const [title, author] = origTitle.split('|', 2);
      result.push({ title, author, confidence: 75 });
      result.push({ author: title, title: author, confidence: 70 });
    }
    return result;
  }
}

export default Playlist;
