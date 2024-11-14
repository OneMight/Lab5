const fs = require('fs');
const path = require('path');

const path_to_folder = path.join(__dirname,'../data/')
const Pilots = path.join(path_to_folder,process.argv[2])

const readall = (Pilots) =>{
    if(!fs.existsSync(Pilots)){
        throw new Error('Не правильный путь к папке с данными');
    }
    const stream = fs.createReadStream(Pilots,{ encoding: "utf-8"});
    
    stream.on('data', (chunk) =>{
        console.log("Чтение блока данных");
        console.log(chunk);
    })
    stream.on('end', ()=>{
        console.log("Файл полностью прочитан");
    })
    stream.on('error', (err) =>{
        console.log(`Ошибка чтения файла: ${err.message}`);
    })
}



module.exports = readall(Pilots);