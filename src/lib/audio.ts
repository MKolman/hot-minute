/* eslint-disable global-require */
class Player {
  allSounds: HTMLAudioElement[];

  currentSound: number;

  constructor(...sounds: string[]) {
    this.currentSound = 0;
    this.allSounds = [];
    for (let i = 0; i < sounds.length; i += 1) {
      this.allSounds.push(new Audio(sounds[i]));
    }
  }

  play(): HTMLAudioElement {
    this.currentSound += 1;
    this.currentSound %= this.allSounds.length;
    const sound = this.allSounds[this.currentSound].cloneNode() as HTMLAudioElement;
    sound.play().catch((err) => console.log('Unable to play sound', err));
    return sound;
  }
}

export default {
  bomb: new Player(require('@/assets/sound/explosion_medium.mp3')),
  selected: new Player(require('@/assets/sound/selected.mp3')),
  select: new Player(
    require('@/assets/sound/select1.mp3'),
    require('@/assets/sound/select2.mp3'),
    require('@/assets/sound/select3.mp3'),
  ),
  countdown: new Player(require('@/assets/sound/alarm.mp3')),
  timesup: new Player(require('@/assets/sound/timesup.mp3')),
  winner: new Player(require('@/assets/sound/winner.mp3')),
  flip: new Player(require('@/assets/sound/flip.mp3')),
};
