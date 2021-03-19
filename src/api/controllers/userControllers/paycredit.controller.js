const CreditCardTransaction = require('../../models/creditCardTransaction') 
const creditTransaction = require('../../services/creditPosting.service')
const ClientCard = require('../../models/clientCard')



const paycreditHandler = async (request, h) => {
    //modela a entrada de dados 
    // Dados esperados : clientCard,cardEntrieValue, installmentNumber
    try {
        const {cardNumber,value,installments, description} = request.payload
        const {expiration, holder, password, cvv} = request.payload
        const creditCard = new ClientCard(cardNumber, holder, expiration, cvv, password)
        const creditCardTransaction = new CreditCardTransaction({clientCard:cardNumber,cardEntrieValue:value,installmentNumber:installments, description})
        const msg = await creditTransaction(creditCardTransaction, creditCard)
        return msg

    }catch(err) {

        return err.message
    }

}

module.exports = paycreditHandler


