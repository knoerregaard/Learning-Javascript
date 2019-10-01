var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.get('/', function (req, res) {
 res.send(JSON.stringify({ Hello: 'World'}));
});
app.use(express.static('public'))
app.use(express.static('xmlhttprequest'))

app.listen(port, function () {
 console.log(`Example app listening on port !`);
});
