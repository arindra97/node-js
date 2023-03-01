const fs = require('fs');
const { version } = require('os');
 

// versi Asyncrhonus
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};
 
fs.readFile('todo.txt', 'UTF-8', fileReadCallback);

// versi syncronus 
const data2 = fs.readFileSync('todo.txt', 'UTF-8');
console.log(data2);