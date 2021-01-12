<template>
  <v-expansion-panel class="playlist">
    <v-expansion-panel-header color="primary">
      <v-edit-dialog>
        <span style="color: white">{{ playlist.name }}</span>
        <v-icon dense>mdi-pencil</v-icon>
        <template v-slot:input>
          <v-text-field
            v-model="name"
            label="Edit"
            single-line
          ></v-text-field>
        </template>
      </v-edit-dialog>
    </v-expansion-panel-header>

    <v-expansion-panel-content>
      <v-data-table
        :headers="tableHeaders"
        :items="playlist.songs"
        :items-per-page="25"
        :search="search"
        :single-expand="true"
        :disable-sort="true"
        mobile-breakpoint="350"
        :expanded.sync="expanded"
        :loading="playlist.loading"
        :footer-props="{
          'items-per-page-options': [10, 25, 50, 100, -1],
          'items-per-page-text': 'page',
        }"
        show-expand
        dense
        class="elevation-1"
      >
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <v-radio-group
              @change="({title, author}) => updateSong(item.id, { title, author })"
            >
              <v-radio
                v-for="(alt, index) in item.alts"
                :key="index"
                :value="alt"
              >
                <template v-slot:label>
                  <span class="alt-song-label">{{ alt.title }}</span>
                  <span class="alt-song-label">{{ alt.author }}</span>
                </template>
              </v-radio>
            </v-radio-group>
          </td>
        </template>

        <template v-slot:item.title="{ item }">
          <v-edit-dialog :return-value="item.title">
            {{ item.title }}
            <v-icon
              small
              v-if="expanded.length > 0 && expanded[0].id === item.id"
            >mdi-pencil</v-icon>
            <template v-slot:input>
              <v-text-field
                :value="item.title"
                @input="(title) => updateSong(item.id, { title })"
                label="Edit"
                single-line
              ></v-text-field>
            </template>
          </v-edit-dialog>
        </template>

        <template v-slot:item.author="{ item }">
          <v-edit-dialog :return-value="item.author">
            {{ item.author }}
            <v-icon
              small
              v-if="expanded.length > 0 && expanded[0].id === item.id"
            >mdi-pencil</v-icon>
            <template v-slot:input>
              <v-text-field
                :value="item.author"
                @input="(author) => updateSong(item.id, { author })"
                label="Edit"
                single-line
              ></v-text-field>
            </template>
          </v-edit-dialog>
        </template>

        <template v-slot:item.delete="{ item }">
          <v-btn
            icon
            small
            :color="toDelete === item.id ? 'secondary' : undefined"
            @click="deleteSong(item.id);"
            v-click-outside="{
              handler: () => { toDelete = null; },
              closeConditional: () => { return toDelete === item.id; },
            }"
          >
            <v-icon :small="toDelete !== item.id">
              {{ toDelete === item.id ? 'mdi-alert' : 'mdi-delete' }}
            </v-icon>
          </v-btn>
        </template>
      </v-data-table>
      <center>
        <br>
        <v-btn
          color="secondary"
          @click="deleteSelf"
          v-click-outside="{
            handler: () => { confirmDelete = false; },
            closeConditional: confirmDelete
          }"
        >
          <v-icon :large="confirmDelete">
            {{ confirmDelete ? 'mdi-alert' : 'mdi-delete' }}
          </v-icon>
          Delete playlist
        </v-btn>
        <br>
        <span v-if="confirmDelete">
          Click again to confirm deletion of playlist "{{ name }}".
        </span>
        <br>
      </center>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<style lang="scss">
.playlist .v-expansion-panel-content__wrap {
  padding: 0;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Playlist from '@/lib/playlist';

export default Vue.extend({
  name: 'Playlist',
  model: {
    prop: 'playlist',
    event: 'change',
  },
  props: {
    playlist: Playlist,
  },
  data() {
    return {
      search: '',
      expanded: [],
      toDelete: null as number | null,
      confirmDelete: false,
      tableHeaders: [
        { value: 'title', text: 'Title' },
        { value: 'author', text: 'Author' },
        { value: 'delete' },
      ],
    };
  },
  computed: {
    name: {
      get(): string {
        return this.playlist.name;
      },
      set(name: string) {
        this.$emit('change', Object.assign(this.playlist, { name }));
      },
    },
  },
  methods: {
    deleteSelf() {
      if (this.confirmDelete) {
        this.$emit('delete');
      }
      this.confirmDelete = true;
    },
    deleteSong(id: number) {
      if (this.toDelete !== id) {
        this.toDelete = id;
        return;
      }
      this.toDelete = null;
      this.$emit('change', Object.assign(this.playlist, {
        songs: this.playlist.songs.filter((s) => s.id !== id),
      }));
    },
    updateSong(id: number, val: { title?: string; author?: string }) {
      Object.assign(this.playlist.songs[id], val);
      this.$emit('change', this.playlist);
    },
  },
});

</script>
