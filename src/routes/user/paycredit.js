const paycreditHandler = require('../../api/controllers/userControllers/paycredit.controller')
const paycredit = {
    method:'POST',
    path: '/user/paycredit',
    handler: paycreditHandler,
   /*  options: {
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


module.exports = paycredit