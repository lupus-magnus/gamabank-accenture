const mysql = require('mysql')
const databaseConfigs  = require('../configs/env').database
const {executeDB} = require('../../helpers/database.util')


// o que vamos receber: creditcard, cardEntrieValue, cardEntrieCreditInstallment
// obj = numero de parcelas, valor de cada parcela
const newCreditPosting = (creditCardTransaction) => {
    const {clientcard, clientCod, cardEntrieValue, cardEntrieCreditInstallment} = creditCardTransaction 

    const connection = mysql.createConnection(databaseConfigs)
    const sqlStatement = `INSERT INTO cardentrie (cardEntrieCod, cliendCod, cardEntrieType, cardEntrieValue, cardEntrieCreditInstallment) VALUES(${clientcard}, ${clientCod}, "crédito", ${cardEntrieValue}, ${cardEntrieCreditInstallment})`
//cardInstallment é um array
    const {installment} = creditCardTransaction 
    for(key in installment){
        const sqlInstallment = `INSERT INTO creditcardentrieinstallment (creditCardEntrieInstallmentNumber, creditCardEntrieInstallmentValue) VALUES(${key}, ${installment[key]})`
        try{
            await executeDB(sqlInstallment)
        }catch(err){
            throw err
        }      
    }    
    try{
        await executeDB(sqlStatement)
    }catch(err){
        throw err
    }
} 



module.exports = {newCreditPosting}