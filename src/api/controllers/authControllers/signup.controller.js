const service = require('../../services/client.service')
const Client = require('../../models/client')


const signupHandler = async (request, h) => {
    try{
        const client = new Client(request.payload)
        const result = await service.newClient(client)
        return result

    }catch(err){
        return err.message
    }
}
module.exports = signupHandler