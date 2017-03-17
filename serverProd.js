require('babel-register');

import express from 'express';

const app = express();
const ip = '0.0.0.0';
const port = process.env.PORT || '5000';
//app.set('port', port);

/* Serve static */
app.use('/', express.static(__dirname + '/dist'));
//app.use(express.static(__dirname + '/dist/media'));

app.listen(port, ip, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`listening on ${ip}:${port}`);
});
