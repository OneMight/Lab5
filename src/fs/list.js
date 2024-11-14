const fs = require('fs');
const path = require('path');

const path_to_folder = path.join(__dirname,'../data');
const Pilots = path.join(path_to_folder,'index.json');

const list = () =>{
    if(!fs.existsSync(Pilots)){
        throw new Error('Данного файла не существует');
    }

    let inf = JSON.parse(fs.readFileSync(Pilots));
    inf.map(pilot => console.log(`id: ${pilot.Pilot.id}, filename: ${pilot.filename}`))
}

module.exports = list();