"use strict";
class Playlist {
    constructor() {
        this.queue = [];
        this.currentSong = null;
    }
    addSong(title) {
        this.queue.push(title);
        console.log(`Cancion añadida ${title}`);
    }
    playNext() {
        if (this.queue.length === 0) {
            console.log("No existe cancion en cola.");
            this.currentSong = null;
            return;
        }
        this.currentSong = this.queue.shift() || null;
        console.log(`Reproduciondo: ${this.currentSong}`);
    }
    upNext() {
        return this.queue.length > 0 ? this.queue[0] : null;
    }
    skipSong() {
        if (this.queue.length === 0) {
            console.log("No hay canciones para saltar");
            return;
        }
        const skipped = this.queue.shift();
        console.log(`Saltada: ${skipped}`);
        this.playNext();
    }
    nowPlaying() {
        return this.currentSong;
    }
}
const myPlaylist = new Playlist();
myPlaylist.addSong("La Macarena");
myPlaylist.addSong("Torero");
myPlaylist.addSong("El Taxi");
console.log("Próxima canción a reproducir:", myPlaylist.upNext());
myPlaylist.playNext();
console.log("Reproduciendo ahora:", myPlaylist.nowPlaying());
console.log("Próxima canción a reproducir:", myPlaylist.upNext());
myPlaylist.skipSong();
console.log("Reproduciendo ahora:", myPlaylist.nowPlaying());
myPlaylist.playNext();
console.log("Reproduciendo ahora:", myPlaylist.nowPlaying());
