const server = require('./server')


server.then((server)=>{
    server.start()
    console.log(`\n Server inicializado com sucesso. Acesse: \n`)
    console.log(` http://localhost:${process.env.PORT}/`)
})