const express = require('express');
const path = require('path');
const app = express();
const port = 3050;

app.use(express.static(__dirname + '/Front'));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'Front', 'mainpage.html'));
});


app.get('/connection', function (req, res) {
    res.sendFile(path.join(__dirname, 'Front', 'homepage.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))