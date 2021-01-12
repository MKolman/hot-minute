/* eslint-disable global-require */

class Player {
  allSounds: HTMLAudioElement[];

  currentSound: number;

  name: string;

  constructor(name: string, ...sounds: string[]) {
    this.currentSound = 0;
    this.name = name;
    this.allSounds = [];
    for (let i = 0; i < sounds.length; i += 1) {
      this.allSounds.push(new Audio(sounds[i]));
    }
  }

  play(enabled: string[]): HTMLAudioElement {
    if (!enabled.includes(this.name)) {
      console.log(this.name, 'sound is disabled and was not played');
      return this.allSounds[0];
    }
    console.log('Playing', this.name);
    this.currentSound += 1;
    this.currentSound %= this.allSounds.length;
    const sound = this.allSounds[this.currentSound].cloneNode() as HTMLAudioElement;
    sound.play().catch((err) => console.log('Unable to play sound', err));
    return sound;
  }
}

export default {
  bomb: new Player('bomb', require('@/assets/sound/explosion_medium.mp3')),
  selected: new Player('selected', require('@/assets/sound/selected.mp3')),
  select: new Player(
    'select',
    require('@/assets/sound/select1.mp3'),
    require('@/assets/sound/select2.mp3'),
    require('@/assets/sound/select3.mp3'),
  ),
  countdown: new Player('countdown', require('@/assets/sound/alarm.mp3')),
  timesup: new Player('timesup', require('@/assets/sound/timesup.mp3')),
  winner: new Player('winner', require('@/assets/sound/winner.mp3')),
  flip: new Player('flip', require('@/assets/sound/flip.mp3')),
  speak: new Player('activity_type', require('@/assets/sound/speak.mp3')),
  draw: new Player('activity_type', require('@/assets/sound/draw.mp3')),
  show: new Player('activity_type', require('@/assets/sound/show.mp3')),
};
