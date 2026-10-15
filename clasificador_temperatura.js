import inquirer from 'inquirer';

export function execute3() {
  inquirer
    .prompt([{
      type: 'number',
      name: 'temperatura',
      message: 'Ingrese temperatura en grados Celsius:'
    }])
    .then((answers) => {

      const { temperatura } = answers;

      if (temperatura < 10) {
        console.log("Hace frío, lleva chaqueta")
      } else if (temperatura >= 10 && temperatura <= 24) {
        console.log("Clima templado")
      } else if (temperatura >= 25) {
        console.log("Hace calor, hidrátate")
      } else {
        console.log("Error")
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
