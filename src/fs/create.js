const fs = require("fs");
const path ='../data/'
const Id = Date.now();
const createPilot = (Pilot) =>{
    
    
    const filename =`${Pilot.pilotSurname}_${Id}.json`
    
    const filePath = path + filename
    if (fs.existsSync(filePath)) {
        throw new Error('Ошибка операции FS: Запись уже существует');
    }
    fs.writeFileSync(filePath, JSON.stringify(Pilot, null, 2));
    const indexFilePath = path + 'index.json';

    let indexData = [];

    if (fs.existsSync(indexFilePath)) {
        const indexFileContent = fs.readFileSync(indexFilePath);
        indexData = JSON.parse(indexFileContent);
    }
    indexData.push({
        filename,
        Pilot,
        createdAt: new Date().toISOString(),
    });

    fs.writeFileSync(indexFilePath, JSON.stringify(indexData, null, 2));

    console.log(`Запись добавлена: ${filePath}`);
}

const agrs = process.argv.slice(2)

const object ={
    id: Id,
    pilotName: agrs[0],
    pilotSurname:agrs[1],
    age:agrs[2],
    group:agrs[3],
    team:agrs[4]
}

module.exports = createPilot(object);