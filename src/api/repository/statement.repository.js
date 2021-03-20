const database = require('../../helpers/database.util')
const {dateToUtc} = require('../../helpers/dateToUTC')

//ENTRADAS DAS DUAS FUNÇÕES: {acc, initDate, endDate}

//SAÍDA DO getEntries: checkingAccountEntryDate, checkingAccountEntryType, checkingAccountEntryValue, checkingAccountEntryDescription

//SAÍDA DO getCheckouts: checkingAccountCheckoutDate, checkingAccountCheckoutType, checkingAccountCheckoutValue, checkingAccountCheckoutDescription

const getCheckouts = async (getCheckoutsParam) => {
    //console.log(new Date(getCheckoutsParam.initDate * 1000).toISOString().slice(0,19).replace('T',' '))
    const sqlStatement = `
    SELECT accOut.checkingAccountCheckoutDate, accOut.checkingAccountCheckoutType, accOut.checkingAccountCheckoutValue, accOut.checkingAccountCheckoutDescription   
    FROM checkingaccount AS acc
    INNER JOIN checkingaccountcheckout AS accOut 
    ON acc.checkingAccountNumber = accOut.checkingAccountNumber
    WHERE acc.checkingAccountNumber = ${getCheckoutsParam.acc} 
    AND accOut.checkingAccountCheckoutDate BETWEEN '${dateToUtc(getCheckoutsParam.initDate)}' AND '${dateToUtc(getCheckoutsParam.endDate)}';
    `

    try{
        const result = await database.query(sqlStatement)
        return result;
    }catch(err){
        console.log(err)
    }
}

const getEntries = async (getEntriesParam) => {
    const sqlStatement = `
    SELECT accIn.checkingAccountEntryDate, accIn.checkingAccountEntryType, accIn.checkingAccountEntryValue, accIn.checkingAccountEntryDescription 
    FROM checkingaccount AS acc
    INNER JOIN checkingaccountentry AS accIn 
    ON acc.checkingAccountNumber = accIn.checkingAccountNumber
    WHERE acc.checkingAccountNumber = ${getEntriesParam.acc}
    AND accIn.checkingAccountEntryDate BETWEEN '${dateToUtc(getEntriesParam.initDate)}' AND '${dateToUtc(getEntriesParam.endDate)}';
    `
    try{
        const result = await database.query(sqlStatement)
        return result;
    }catch(err){
        console.log(err)
    }
}


module.exports = { getCheckouts, getEntries }
