const paydebitHandler = require('../../api/controllers/userControllers/paydebit.controller')
const paydebit = {
    method:'POST',
    path: '/user/paydebit',
    handler: paydebitHandler,
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


module.exports = paydebit