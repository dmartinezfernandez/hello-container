'use strict';

const express = require('express');

let n = 0;

// Constants
const PORT = process.env.PORT ?? 8080;
const HOST = process.env.HOST ?? '0.0.0.0'; // Important! (https://stackoverflow.com/questions/65721320/localhost-didn-t-send-any-data-err-empty-response-nodejs)

// App
const app = express();
app.get('/', (req, res) => {
    res.send(`<p style="font-family: system-ui">Hello World (${++n})</p>`);
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});