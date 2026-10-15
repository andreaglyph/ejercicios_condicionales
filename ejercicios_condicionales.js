import inquirer from 'inquirer';

export function execute1() {
    inquirer
        .prompt([{
            type: 'number',
            name: 'nota',
            message: 'Ingrese nota:'
        }])
        .then((answers) => {

            const { nota } = answers;

            if (nota < 0 || nota > 100) {
                console.log("Nota inválida")
            } else if (nota >= 90 && nota <= 100) {
                console.log("Excelente")
            } else if (nota >= 70 && nota <= 89) {
                console.log("Aprobado")
            } else if (nota >= 50 && nota <= 69) {
                console.log("Debes mejorar")
            } else {
                console.log("Reprobado")
            }
        })
        .catch((error) => {

            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

