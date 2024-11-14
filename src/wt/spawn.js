const {spawn} = require('child_process');

const search_param = process.argv[2];


    const Process = spawn('node', ['./search.js', search_param], {cwd: __dirname});
    
    Process.stdout.on('data', (data) =>{
        console.log(`Результаты поиска\n:${data}`);
    })
    Process.stderr.on('data', (err) =>{
        console.log(`Ошибка: ${err}`);
    })
    Process.on('close', (code) =>{
        console.log(`Процесс завершен. Код процесса: ${code}`);
    })

