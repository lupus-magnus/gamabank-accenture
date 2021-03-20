const service = require('../../services/client.service')
const Client = require('../../models/client')
const {sendSignupEmail } = require('../../services/email.service')

const signupHandler = async (request, h) => {
    try{
        const client = new Client(request.payload)
        const result = await service.newClient(client)
        const emailData = {...result, ...request.payload, email: client.clientEmail}
        sendSignupEmail(emailData)
        console.log(emailData)
        return result.message

    }catch(err){
        return err.message
    }
}
module.exports = signupHandler