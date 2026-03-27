const https = require('https');

const data = JSON.stringify({
    service_id: 'service_39xssrf',
    template_id: 'template_gbr4b2e',
    user_id: 'fnr5Np_7rM7tjBmgX',
    template_params: {
        from_name: 'Antigravity Debugger',
        reply_to: 'debug@test.com',
        phone: '9999999999',
        message: 'Testing EmailJS Configuration'
    }
});

const options = {
    hostname: 'api.emailjs.com',
    port: 443,
    path: '/api/v1.0/email/send',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = https.request(options, (res) => {
    let responseBody = '';
    res.on('data', (chunk) => {
        responseBody += chunk;
    });

    res.on('end', () => {
        console.log('Status Code:', res.statusCode);
        console.log('Response Body:', responseBody);
    });
});

req.on('error', (e) => {
    console.error('Request Error:', e);
});

req.write(data);
req.end();
