// cardEntrieCreditInstallment é um obj 
class CreditCardTransaction {
    constructor({clientCard, clientCod, cardEntrieValue, installmentNumber, cardEntrieCreditInstallment}){
        this.clientCard = clientCard,
        this.clientCod= clientCod, 
        this.cardEntrieValue = cardEntrieValue, 
        this.installmentNumber = installmentNumber,
        this.installment = cardEntrieCreditInstallment
    }
}

module.exports = CreditCardTransaction