const {getTitle} = require('./view')

async function app(state, update, view) {
    while (true) {
        const {model, currentView} = state
        const {title, table} = currentView
        console.clear()
        console.log(title)
        
    }    
}

module.exports = {
    app
}
