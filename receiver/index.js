const http = require('http');
const Express = require('express');
const bodyParser = require('body-parser');
const os = require('os');

const app = Express();
app.enable('trust proxy');
app.disable('x-powered-by');
app.use(bodyParser.json());

const server = http.createServer(app);

app.post('/', (req, res) => {
    console.log("Sender's IP address wrt to:");
    console.log(`\tbody: ${req.body.senderIp}`);
    console.log(`\treq.ip is ${req.ip}`);
    console.log(`\treq.connection.remoteAddress: ${req.connection.remoteAddress}`);
    console.log(`\treq.socket.remoteAddress: ${req.socket.remoteAddress}`);

    res.sendStatus(200);
});

server.listen(80, () => {
    console.log("Receiver is awaiting calls");
});
