const { ENV, ResponseStatus } = require("../_enums/enums")
const path = require('path')

const env = {
    port: 8082,
    corsOption: '',
    clientside: 'http://localhost:3000',
    mongodb_uri: 'mongodb+srv://l226929:QIzD7xDw36ZzItwT@cluster0.kbiuqsy.mongodb.net/',
    AWS_REGION: 'us-east-2',
    AWS_BUCKET: 'dev.ghlappstore',
    SUPER_ADMIN: '6298acc76bcf0340b4ec6b6b',
   
}


module.exports = env