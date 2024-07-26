const { connect } = require('mongoose')
const config = require('../_config/config')

const connectDb = () => {
    const mongooseOptions = {
        useNewUrlParser    : true,
        useUnifiedTopology : true
    }

    connect(config.mongodb_uri, mongooseOptions)
    .then(() => { console.log('Database connected') })
    .catch(err => { console.log('Error connecting database \n', err) })
}

module.exports = connectDb