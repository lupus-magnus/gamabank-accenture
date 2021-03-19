const CreditCardTransaction = require('../../models/creditCardTransaction') 
const creditTransaction = require('../../services/creditPosting.service')



const paycreditHandler = async (request, h) => {
    //modela a entrada de dados 
    // Dados esperados : clientCard,cardEntrieValue, installmentNumber
    try {
        const {cardNumber,value,installments} = request.payload
        const creditCardTransaction = new CreditCardTransaction({clientCard:cardNumber,cardEntrieValue:value,installmentNumber:installments})
        const msg = await creditTransaction(creditCardTransaction)
        return msg

    }catch(err) {

        return err.message
    }

}

module.exports = paycreditHandler


