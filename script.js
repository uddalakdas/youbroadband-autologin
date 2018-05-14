const request = require('request');
const qs = require('querystring');

setInterval (() => {
        request({
        method: 'GET',
        url: 'http://172.22.252.11/status'
    }, (err, res, body) => {
        if (body.indexOf('Welcome intex5!') != -1) {
            console.log('Connected...');
        } else if (body.indexOf('Please log on to use the internet hotspot service') != -1) {
            console.log('Disconnected...');
            var data = qs.stringify({
                dst: '',
                popup: 'true',
                username: 'intex5',
                password: 'You@1234' 
            });
            console.log(data);
            request({
                method: 'POST',
                url: 'http://172.22.252.11/login',
                form: {
                    dst: '',
                    popup: 'true',
                    username: 'intex5',
                    password: 'You@1234' 
                },
                headers: { 
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0',
                    'Content-Type' : 'application/x-www-form-urlencoded' 
                }
            }, (err, res, body) => {
                if (res.body.indexOf('You are logged in') != -1) {
                    console.log('Connected to internet...');
                }
            });
        }
    });
}, 1000 * 10);