// TODO 1
// Buat atau impor variabel EventEmitter dari core module events.
const { EventEmitter } = require('events');
 
const graduationEventListener = (name) => {
    console.log(`Happy graduation ${name}!`);
  }
   
// TODO 2
// Buat variabel myEmitter yang merupakan instance dari EventEmitter
const myEmitter = new EventEmitter();

// TODO 3
// Tentukan graduationEventListener sebagai aksi ketika event ‘graduation’ dibangkitkan pada myEmitter.
myEmitter.on('graduation', graduationEventListener);

// TODO 4
// Bangkitkanlah event ‘graduation’ pada myEmitter dengan method emit() dan beri nilai argumen listener dengan nama Anda.
myEmitter.emit('graduation', 'Riko')