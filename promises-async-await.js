const https = require('https');

function fetch(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (rd) => data = data + rd);
            res.on('end', () => resolve(data));
            res.on('error', reject)
        });
    });
};

//using the promise
fetch('htps://www.javascript.com')
    .then(data => {
        console.log(data.length);
    });

//calling using async await
(async function read() {
    const data = await fetch('htps://www.javascript.com');
})();