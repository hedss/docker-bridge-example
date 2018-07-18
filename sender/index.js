const request = require('request');
const os = require('os');

const makeRequest = () => {
    request({
        method: 'POST',
        uri: `http://${receiveHost}`,
        json: true,
        body: { senderIp }
    }, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            if (res.statusCode !== 200) {
                console.log(res.statusCode);
            }
        }
    });
    setTimeout(() => { makeRequest() }, 120000);
}

const receiveHost = process.env['RECEIVE_HOST'];
const senderIp = os.networkInterfaces()['eth0'][0].address;

console.log(`The sender's IP address is: ${senderIp}`);
console.log(`Will make requests to: ${receiveHost}`);

if (!receiveHost) {
    console.log('Receive host not set');
} else {
    // Wait 10 seconds to ensure receiver is up
    setTimeout(() => { makeRequest() }, 10000);
}