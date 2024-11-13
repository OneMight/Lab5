const fs = require("fs");
const path = require("path");
const path_to_folder = path.join(__dirname,'../data')
const Pilots = path.join(path_to_folder,'index.json')

const DeletePilot = (id) =>{
    let allPilots;
 
    try{
        allPilots = JSON.parse(fs.readFileSync(Pilots))
    }
    catch(err){
        console.log(`Ошибка при обработки файла: ${err.message}`);
        process.exit(1);
    }

    const remove_Pilot = allPilots.find(pilot => pilot.Pilot.id == id);
    if(remove_Pilot){
        const remove_path = path.join(path_to_folder, `Pilot_${remove_Pilot.Pilot.id}.json`)
        try{
            fs.unlinkSync(remove_path);
            console.log(`Файл ${remove_path} успешно удален`)
        }
        catch(err){
            console.log(`Произошла ошибка при удалении файла: ${remove_path}. ${err.message}`)
        }

        allPilots = allPilots.filter(pilot => pilot.Pilot.id != id);
        fs.writeFileSync(Pilots,JSON.stringify(allPilots,2,null))
    }
    else{
        console.log(`Пилот с ${id} не найден`)
    }
}

const id = process.argv[2];

module.exports = DeletePilot(id);