const fs = require('fs');

server.on('request', (request, response) => {
    const body = [];

    // log every request the server receives
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        const bodyString = Buffer.concat(body).toString();

        const remoteAddress = request.socket.remoteAddress;
        const httpVersion = request.httpVersion;
        const requestTime = new Date().toUTCString();

        const log = '=================================\n' +
            `> ${request.method} request from ${request.url}\n` +
            `> Headers\n${JSON.stringify(request.headers, null, 2)}\n` +
            `> Body\n${bodyString}\n` +
            `> Remote IP address: ${remoteAddress}\n` +
            `> HTTP version: ${httpVersion}\n` +
            `> Request time (UTC): ${requestTime}\n\n`;

        // logs are stored in a file with the date as the name, so they are somewhat navigateable
        const today = new Date().toISOString().slice(0, 10);
        const logFileName = `logs/log-${today}.txt`;

        fs.appendFile(logFileName, log, (err) => {
            if (err) {
                console.error(err);
            }
        });

        response.end();
    });
}).listen(8083);
