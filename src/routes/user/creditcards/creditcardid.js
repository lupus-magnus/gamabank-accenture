const creditcardidHandler = require('../../../api/controllers/userControllers/creditcardControllers/creditcardid.controller')
const creditcardid = {
    method:'GET',
    path: '/user/creditcards/{id}',
    handler: creditcardidHandler,
    /* options: {
        tags: ['api', 'transfer'],
        description: 'Rota de transferência',
        notes: 'Anotações da rota...',
        validate: {
            headers: Joi.object({'x-access-token':Joi.string()}).unknown(),
            payload: TransferRequestDTO
            
        },
        
        response: {
            status: { 
                200: Joi.any(),
                400: Joi.any()
            }
        } 
    } */
}


module.exports = creditcardid