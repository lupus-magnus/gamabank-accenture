const service = require('../../services/client.service')
const Client = require('../../models/client')
const {sendSignupEmail } = require('../../services/email.service')


const signupHandler = async (request, h) => {
    let shouldEmailBeSent = true
    let emailData
    try{
        const client = new Client(request.payload)
        const result = await service.newClient(client)
        emailData = {...result, ...request.payload, email: client.clientEmail}
        
        console.log(emailData)
        return result.message

    }catch(err){
        shouldEmailBeSent = false
        return err.message
    }finally{
        if(shouldEmailBeSent) sendSignupEmail(emailData)
    }
}
module.exports = signupHandler