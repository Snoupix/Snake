class SoundEffect {
   constructor(audioContext, soundPath) {
       this.audioContext = audioContext;
       this.ready = false;


       const request = new XMLHttpRequest();
       request.open('GET', soundPath, true);
       request.responseType = 'arraybuffer';
       request.addEventListener('load', this.onSoundLoaded.bind(this), false);
       request.send();
   }


   onSoundLoaded(event) {
       this.audioContext.decodeAudioData(event.target.response).then((audioData) => {
           this.audioData = audioData;
           this.ready = true;
       });
   }


   play() {
       if (!this.ready) return;


       const source = this.audioContext.createBufferSource();
       source.buffer = this.audioData;
       source.connect(this.audioContext.destination);
       source.start();
   }
}