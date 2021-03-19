const signupHtml = (userInfo) => {
    return (`
    <h1 style="color:#013a63; align-text: center; font-family: 'Helvetica', sans-serif; font-size: 20px">Bem vindo(a) ao HelloBank</h1>
    <h5 style=" align-text: center; font-family: 'Helvetica', sans-serif; font-size: 16px;">Olá, ${userInfo.clientName.split(" ")[0]}!</h5>
    <h5 style=" align-text: center; font-family: 'Helvetica', sans-serif; font-size: 16px;">É muito bom ter você aqui com a gente, no melhor banco do mundo!</h5>
    <p style= "align-text: center; font-family: 'Helvetica', sans-serif; font-size: 14px;"> Suas informações estão logo abaixo:</p>
    <div class="card-group" >
    <div class="card" style="position: relative;height: 270px;width: 450px;border-radius: 25px;background: #013a63");backdrop-filter: blur(30px);border: 2px solid rgba(255, 255, 255, 0.1);box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);overflow: hidden;">
      <div class="logo" style="display: flex; justify-content: flex-end; margin-right: 20px;">
      <img src="https://1.bp.blogspot.com/-AkDU0CPo-vQ/YFUYnIpHurI/AAAAAAAANXo/XX8n7-4tQSI6kkIHpiXD7dOUztZmDX0cACLcBGAsYHQ/s918/hellobanklogo2.png" alt="HelloWork Logo" style="width: 150px; margin-top: 40px">
      </div>
      <div class="chip"><img src="https://img.pngio.com/chip-png-free-download-fourjayorg-chip-png-2400_2400.png" alt="chip" style="position: absolute;top: 120px;left: 40px;width: 50px;height: auto;opacity: 0.8;"></div>
      <div class="number" style="position: absolute;color: rgba(255, 255, 255, 0.8);font-weight: 400;letter-spacing: 2px;text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);left: 40px;bottom: 65px;font-family: &quot;Nunito&quot;, sans-serif;">${userInfo.number}</div>
      <div class="name" style="position: absolute;color: rgba(255, 255, 255, 0.8);font-weight: 400;letter-spacing: 2px;text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);font-size: 0.5rem;left: 40px;bottom: 35px;">${userInfo.holder}</div>
      <div class="expired" style="position: absolute;color: rgba(255, 255, 255, 0.8);font-weight: 400;letter-spacing: 2px;text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);font-size: 0.5rem;bottom: 35px;right: 110px;">${userInfo.expiration}</div>
      <div class="cvv" style="position: absolute;color: rgba(255, 255, 255, 0.8);font-weight: 400;letter-spacing: 2px;text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);font-size: 0.5rem;bottom: 35px;right: 40px;">${userInfo.cvv}</div>
    </div>
  </div> 
    `)

}
 

const paidInstallmentHtml = (userInfo) => {
    return(`
    <div style="display: flex; align-items: center; justify-content: center;">
        <img src="https://imagepng.org/wp-content/uploads/2019/12/check-icone-1-scaled.png" style="width: 150px;">
        <div style="display: flex; align-items: center; flex-direction: column; margin-left: 20px;">
             <h1 style="color:#013a63; align-text: center; font-family: 'Helvetica', sans-serif; font-size: 20px">Boa, ${userInfo.name.split(" ")[0]}!</h1>
             <p style= "align-text: center; font-family: 'Helvetica', sans-serif; font-size: 14px;"> A fatura do seu cartão de número ${userInfo.cardNumber} acabou de ser paga!</p>
        </div>
         
    </div>
    `)
}

const creditCardEntryHtml = (userInfo) => {
    return (`
    <div style="display: flex; align-items: center; justify-content: center;">
        <img src="https://thalassafestival.com/wp-content/uploads/2019/12/registration-icon-png-6.png" style="width: 150px;">
        <div style="display: flex; align-items: center; flex-direction: column; margin-left: 20px;">
             <h1 style="color:#013a63; align-text: center; font-family: 'Helvetica', sans-serif; font-size: 20px">Caro(a) ${userInfo.name.split(" ")[0]},</h1>
             <p style= "align-text: center; font-family: 'Helvetica', sans-serif; font-size: 14px;"> Uma nova compra de ${userInfo.checkingAccountEntryValue} no cartão de número ${userInfo.cardNumber} acabou cadastrada!</p>
        </div>
         
    </div>
    `)
}

const paidDebitHtml = (userInfo) => {
    return (`
    <div style="display: flex; justify-content: center;">
        <img src="https://images-ext-1.discordapp.net/external/d_5YjsmAFRhtXK5fbyG_0LIwn1-gGv09hFWMtZRv4f8/https/upload.wikimedia.org/wikipedia/commons/thumb/6/65/Credit_or_Debit_Card_Flat_Icon_Vector.svg/1200px-Credit_or_Debit_Card_Flat_Icon_Vector.svg.png?width=702&height=702" style="width: 250px;">
        <div style="display: flex; flex-direction: column; margin-left: 20px;">
             <h1 style="color:#013a63; align-text: center; font-family: 'Helvetica', sans-serif; font-size: 20px">Novo lançamento de débito!</h1>
             <h2 style= "align-text: center; font-family: 'Helvetica', sans-serif; font-size: 14px;"> Uma nova compra de débito foi cadastrada!</h2>
             <p style= "align-text: center; font-family: 'Helvetica', sans-serif; font-size: 14px;">Valor: R$ ${userInfo.value.toFixed(2)} </p>
             <p style= "align-text: center; font-family: 'Helvetica', sans-serif; font-size: 14px;">Descrição: ${userInfo.description}</p>
             <p style= "align-text: center; font-family: 'Helvetica', sans-serif; font-size: 14px;">Horário: ${userInfo.dataFormatada}</p>
        </div>
    </div>
    `)
}

module.exports = {signupHtml, paidInstallmentHtml, creditCardEntryHtml, paidDebitHtml}