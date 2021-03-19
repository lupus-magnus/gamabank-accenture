var chai = require('chai')
const {assert, expect} = require('chai')
const chaiAsPromised = require("chai-as-promised")
chai.use(chaiAsPromised)
const creditTransaction = require('../../src/api/services/creditPosting.service')


describe('Teste de geração de lançamento de credito',()=>{
    
    it('Passando uma data, devem ser geradas parcelas mensais a partir do mes seguinte a essa data',async ()=>{

        const param = {
            clientCard : 4539701190413729,
            clientCod: ''  ,
            cardEntrieValue : 100, 
            installmentNumber : 3,
            installment : "",
            creditPostingDate : 1616162219782
        }

        const {installment} = await creditTransaction(param)
        const dates = installment.map(obj => obj.date)
        expect(dates).to.have.members(['2021-04-19 13:56:59','2021-05-19 13:56:59','2021-06-19 13:56:59']);
        
        // expect(installment).to.not.be.null("Not Null")
        // const expected = [{number:1,value:333.33,date:1617671348000},{number: 2, value: 333.33, date: 1620263348000},{number: 3, value: 333.33, date: 1622941748000}]
        // await expect(result.installment).to.be

    })

})