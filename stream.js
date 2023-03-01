const fs = require('fs');

// readableStream
const readableStream = fs.ReadStream('./article.txt', {
    highWaterMark : 10
})

readableStream.on('readable', ()=>{
    try{
        process.stdout.write(`[${readableStream.read()}]`)
    }
    catch(error){

    }
});


readableStream.on('end', () => {
    console.log('\nDone');
});

// writableStream
const writableStream = fs.createWriteStream('output.txt');
 
writableStream.write('Ini merupakan teks baris pertama!\n');
writableStream.write('Ini merupakan teks baris kedua!\n');
writableStream.end('Akhir dari writable stream!');