/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */
const fs = require('fs');
const { resolve } = require('path');

// const readableStream = fs.ReadStream('./stream/input.txt',{
const readableStream = fs.ReadStream(resolve(__dirname, 'input.txt'),{
    highWaterMark:15
});

// const writableStream = fs.createWriteStream('./stream/output.txt');
const writableStream = fs.createWriteStream(resolve(__dirname, 'output.txt'));

readableStream.on('readable', ()=>{
    try{
        writableStream.write(`${readableStream.read()}\n`);
    }catch(error){
        
    }
});

readableStream.on('end', ()=>{
    writableStream.end();
    console.log('Done');
})