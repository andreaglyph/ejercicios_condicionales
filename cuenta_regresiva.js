import inquirer from 'inquirer';

export function execute2() {
    inquirer
        .prompt([{
            type: 'number',
            name: 'number',
            message: 'Ingresa un número:'
        }])
        .then((answers) => {

            const { number } = answers;

            if (number <= 0) {
                console.log("Número no válido")

            } else {
                for (let numberV = 1; numberV <= number; numberV++) {
                    console.log(numberV)
                }
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