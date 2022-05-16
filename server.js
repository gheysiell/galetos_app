const config = require('./src/config')
const app = require('./src/app')

app.listen(config.app_port, () => {
    console.log('server runnig in port: '+config.app_port)
})