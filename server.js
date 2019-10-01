var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.use('/xmlhttprequest', express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
 res.send(JSON.stringify({ Hello: 'World'}));
});


app.listen(port, function () {
 console.log(`Example app listening on port !`);
});
