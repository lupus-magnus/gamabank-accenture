const { generateStatement } = require('../../services/statement.service')
const { getUserTokenData } = require('../../services/userTokenData.service')


const statementHandler = async (request, h) => {
    const initDate = request.params.initDate //Entrada e saída em unix timestamp.
    const endDate = request.params.endDate
    const { checkingAccountNumber } = await getUserTokenData(request.headers['x-access-token'])

    const result = {acc:checkingAccountNumber, initDate, endDate}
    return await generateStatement(result)
}

module.exports = statementHandler