import inquirer from 'inquirer';
import { execute1 } from './ejercicios_condicionales.js';
import { execute2 } from './cuenta_regresiva.js';
import { execute3 } from './clasificador_temperatura.js';

inquirer
    .prompt([{
        type: 'select',
        name: 'option',
        message: 'Seleccione el ejercicio',
        choices: [
            { name: "ejercicios_condicionales", value: 1 },
            { name: "cuenta_regresiva", value: 2 },
            { name: "clasificador_temperatura", value: 3}
        ]
    }])
    .then((answers) => {
        switch (answers.option) {
            case 1:
                execute1();
                break;
            case 2:
                execute2();
                break;
            case 3:
                execute3()
        }
    })
    .catch((error) => {

        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
