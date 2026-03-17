// create raw server with  node js 

const http = require('node:http')

const server = http.createServer((req,res) => {
    if ( req.method==='GET' && req.url==='/status'){
        res.writeHead(200 , {
            'content-type' : 'application/json' , 
        })

        res.end( JSON.stringify({'status' : 'OK'}))
    }



    if ( req.method==='POST' && req.url==='/status'){
        
        
        let data = ''

        req.on('data' , (chunk) => (data += chunk))

        req.on('end' ,() => {
                const order = JSON.parse(data) 
                res.writeHead(200 , {
            'content-type' : 'application/json' , 
        })

        console.log(order)

        res.end( JSON.stringify({'status' : 'OK',order}))

        })
        
        
        
        
    }



})



server.listen(5000)