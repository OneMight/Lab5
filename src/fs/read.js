const fs = require('fs');
const path = require('path');

const path_to_folder = path.join(__dirname,'../data/')
const Pilots = path.join(path_to_folder,'index.json')

const read = (id)=>{
    if(!fs.existsSync(Pilots)){
       
        throw new Error("Что-то пошло не так. Проверьте путь к папке!");
    }

    let inf = JSON.parse(fs.readFileSync(Pilots))
    const Pilot = inf.find(pilot => pilot.Pilot.id == id)

    if(Pilot){
        console.log(`id: ${Pilot.Pilot.id}, name: ${Pilot.Pilot.pilotName}, surname: ${Pilot.Pilot.pilotSurname} `+
            `age: ${Pilot.Pilot.age}, group: ${Pilot.Pilot.group}, team: ${Pilot.Pilot.team} `);
    }
    else{
        console.log(`Пилота с данным id: ${id} не существует`)
    }
}

const id = process.argv[2]

module.exports = read(id);