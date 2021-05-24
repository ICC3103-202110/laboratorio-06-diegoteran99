const figlet = require('figlet')
const chalk = require('chalk')

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

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}
module.exports = {
    getTitle
}