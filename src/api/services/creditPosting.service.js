const CreditCardTransaction = require('../models/creditCardTransaction')
const getUserCardData = require('../repository/clientCard.repository')
// falta o clientCod
const creditTransaction = async (creditCardTransaction) => {
    const cardData =  await getUserCardData(creditCardTransaction.cardNumber)
    if(creditCardTransaction.cardEntrieValue <= 0 ||
        typeof creditCardTransaction.cardEntrieValue !== "number" ){
        throw new Error ("Valor inválido!")
    }

    if(cardData.clientCreditCardLimit < creditCardTransaction.cardEntrieValue){
        throw new Error("Eita! Limite insuficiente")
    }
    
    creditCardTransaction.clientCod = cardData.clientCod
    creditCardTransaction.installmentNumber

    const generateInstallment = async (numerodeparcelas, valorTotal) => {
        const installments = []
        const installmentValue = Math.round((valorTotal / numerodeparcelas), -2)
        return installmentValue
    }


}



console.log( generateInstallment(3, 300))
module.exports = creditTransaction

