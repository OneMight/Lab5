const fs = require('fs')
const path = require("path")

function copyFile(FolderForCopy, foldertoCopy){
    try{
        fs.copyFileSync(FolderForCopy, foldertoCopy);
        console.log(`Файл ${FolderForCopy} скопирован в ${foldertoCopy}`);
    } catch (error){
        console.error(`Ошибка при копировании файла ${FolderForCopy} в ${foldertoCopy}`);
    }
}

function copyDirectory(FolderForCopy)
{
    if(!fs.existsSync(FolderForCopy))
    {
        console.error("Директивы нет")
        process.exit(1)
    }
    if(!fs.existsSync(end_path)){
        fs.mkdirSync(end_path);
        console.log(`${end_path} была создана`);
    }
    let dataPilot = fs.readdirSync(start_path)

    for(const data of dataPilot){
        const FolderForCopy = path.join(start_path, data);
        const foldertoCopy = path.join(end_path, data);

        const stat = fs.statSync(FolderForCopy);

        if(stat.isDirectory()){
            copyDirectory(FolderForCopy, foldertoCopy);
        }else{
            copyFile(FolderForCopy, foldertoCopy);
        }
    }
}

const start_path = path.join(__dirname, `../${process.argv[2]}`);
const end_path = path.join(__dirname, `../${process.argv[3]}`);

if (!start_path || !end_path) {
  console.error('Ошибка: необходимо указать пути к исходной и целевой директориям');
} else {
  copyDirectory(start_path, end_path);
}