var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.get('/', function (req, res) {
 res.send(JSON.stringify({ Hello: 'World'}));
});

app.use('/xmlhttprequest', express.static(path.join(__dirname, 'public')))

app.listen(port, function () {
 console.log(`Example app listening on port !`);
});
