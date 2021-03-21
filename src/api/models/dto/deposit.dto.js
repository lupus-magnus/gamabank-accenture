const Joi = require('joi');

const DepositRequestDTO = Joi.object({
    headers : Joi.object({'x-access-token':Joi.string()}).unknown(),
    account: Joi.number().required(),
    userCPF: Joi.string(),
    value: Joi.number().required(),
    description: Joi.string()
}).label('DepositRequestDTO')


module.exports = {DepositRequestDTO}