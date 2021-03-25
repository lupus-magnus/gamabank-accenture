
const root = {
    method:'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: './public/index',
            //index: ['index.html']
        }
        //return h.file("./public/index/index.html")
    }
}


module.exports = root
