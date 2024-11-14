const fs = require('fs');
const path = require("path");
const search_param = process.argv[2];
const path_to_folder = path.join(__dirname,'../data/');
const Pilots_Path = path.join(path_to_folder,'index.json');


    fs.readFile(Pilots_Path, (err,data) =>{
        if(err){
            console.log(err.message);
            process.exit(1);
        }
        try{
            const Pilots = JSON.parse(data);
            const res = Pilots.filter(pilot => pilot.Pilot.team.toLowerCase().includes(search_param.toLowerCase()));
            console.log(JSON.stringify(res,null,2))
        }
        catch(err){
            console.log(`Ошибка в файле JSON: ${err.message}`)
            process.exit(1);
        }
    })


