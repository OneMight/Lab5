const fs = require('fs');
const path = require('path');

const path_to_folder = path.join(__dirname,'../data/')
const Pilots_Path = path.join(path_to_folder,process.argv[2])

const write = (Object, Pilots_Path) =>{
    if(!fs.existsSync(Pilots_Path)){
        throw new Error('Не верный путь к файлу index.json')
    }
    let all_Pilots;
    const data = fs.readFileSync(Pilots_Path);
    try{
        all_Pilots = JSON.parse(data);
    }
    catch(err){
        console.log(err.message)
    }

    all_Pilots.push(Object);

    const stream = fs.createWriteStream(Pilots_Path, {encoding:'utf-8'})
    const Pilots = JSON.stringify(all_Pilots, null,2);
    
    stream.write(Pilots, (err) =>{
        err ? console.log(err.message) : console.log("Пилот успешно добавлен!");
    });
}


const Object ={
    "filename" : "Peres_1732514532467.json",
    "Pilot":{
        "id": 1732514532467,
        "pilotName": "Felix",
        "pilotSurname": "Peres",
        "age": 37,
        "group": "f1",
        "team": "RedBull"
    },
    "createdAt": new Date().toISOString()
}

module.exports = write(Object, Pilots_Path)