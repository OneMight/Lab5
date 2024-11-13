const fs = require('fs');
const path = require('path');
const path_to_folder = path.join(__dirname,'../data/')

const rename = (oldName, newName)=>{
    try{
        if(!fs.existsSync(oldName)){
            throw new Error(`Файла с именем пилота ${oldName} не существует`)
        }
        console.log(oldName)
        console.log(newName);
        fs.renameSync(oldName,newName);
        console.log(`Файл с именем ${oldName} перемеименован в ${newName}`);
    }
    catch(err){
        console.log(err.message);
    }
}

const oldName = path.join(path_to_folder, process.argv[2]);
const newName = path.join(path_to_folder, process.argv[3]);
module.exports = rename(oldName,newName);