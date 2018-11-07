socket =  require('ws')

var WebSocketServer = socket.Server,
    wss = new WebSocketServer({port: 2222})
    console.log('Connection established')
    wss.on('connection', function (ws) {
        if (ws.readyState === ws.OPEN) {
            ws.send(JSON.stringify({status: 'ok'}))
        }
        ws.on('message', function (message) {
            console.log('received: %s', message)
        })
        setInterval(
            () => ws.send(JSON.stringify({status: 'ok'})),
            1000
        )
    })


