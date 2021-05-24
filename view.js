const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')


function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Temperature Converter',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {leftValue} = model
    const {leftUnit} = model
    const {rightValue} = model
    const {rightUnit} = model
    return[
        {LeftValue: leftValue, LeftUnit: leftUnit, RightValue: rightValue, RightUnit: rightUnit}
    ]
}

function temperature_source(model){
    const {input} = model
    const message = "Left temperature us source?"
    return inquirer.prompt([
        {
            name: 'input',
            type: 'input',
            message: message,
            default: input,
            validate: function(value){
                if(value==='Y' || value === "n") {
                    return true
                } else {
                    return 'Enter Y or n'
                }
            }
        }
    ])
} 

//por unos problemas no alcance a terminar pero lo que se debe hacer es que con la funcion temperature_source definira el valor que
//se convertira a la unidad que se desee, luego dependiendo de la unidadades elegidas con el metodo de lista se utilizara la funcion que corresponda
//que se encuentran en el archivo update. 
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}
module.exports = {
    getTitle
}