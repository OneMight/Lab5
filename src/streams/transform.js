const { Transform, pipeline } = require('stream');

class PilotTransform extends Transform {
    _transform(chunk) {
        try {
            const pilot = JSON.parse(chunk.toString());
            const transformedPilot = {
                ...pilot,
                name: 'Peres'
            };

            const output = JSON.stringify(transformedPilot, null, 2) + '\n';
            this.push(output);
        } catch (error) {
            console.error('Ошибка при парсинге JSON:', error.message);
        }
    }
}

// Чтение из стандартного ввода и запись в стандартный вывод
const readStream = process.stdin;
const writeStream = process.stdout;

pipeline(
    readStream,
    new PilotTransform(),
    writeStream,
    (err) => {
        if (err) {
            console.error('Ошибка в процессе трансформации:', err);
        } else {
            console.log('Преобразование завершено успешно!');
        }
    }
);
// запуск файла:
// cat ../data/Pilot_1731500453111.json | node transform.js