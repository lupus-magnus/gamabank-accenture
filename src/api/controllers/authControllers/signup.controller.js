const service = require('../../services/client.service')
const Client = require('../../models/client')
const {sendSignupEmail } = require('../../services/email.service')
const { getClient } = require('../../repository/client.repository')


const signupHandler = async (request, h) => {
    let shouldEmailBeSent = true
    let emailData
    let clientData
    try{
        const client = new Client(request.payload)
        const result = await service.newClient(client)
        clientData = await getClient(client) 
        
        emailData = {...result, 
            ...clientData, 
            ...request.payload, 
            email: client.clientEmail
        }
        
        return result.message

    }catch(err){
        shouldEmailBeSent = false
        return err.message
    }finally{
        if(shouldEmailBeSent) sendSignupEmail(emailData)
    }
}
module.exports = signupHandler