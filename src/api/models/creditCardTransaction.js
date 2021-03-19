// cardEntrieCreditInstallment é um obj 
class CreditCardTransaction {
    constructor({clientCard, clientCod, cardEntrieValue, installmentNumber, cardEntrieCreditInstallment}){
        this.clientCard = clientCard,
        this.clientCod= clientCod, 
        this.cardEntrieValue = cardEntrieValue, 
        this.installmentNumber = installmentNumber,
        this.installments = cardEntrieCreditInstallment,
        this.creditPostingDate = new Date()*1
    }
}

module.exports = CreditCardTransaction