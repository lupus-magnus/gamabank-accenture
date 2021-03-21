const Joi = require('joi');

//O headers deveria permitir omissão aos itens: accNumber, userCPF e account.
//Entretando, isto não está acontecendo.

const TransferRequestDTO = Joi.object({

    accAnother: Joi.number().required(), 
    CPF: Joi.string(),
    value: Joi.number(),
    account: Joi.number(),
    bank: Joi.number(),
    description: Joi.string(),

}).label('TransferRequestDTO')


module.exports = { TransferRequestDTO }