var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static('xmlhttprequest'))


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/xmlhttprequest/xmlhttprequest_01.html'));
});


app.listen(port, function () {
 console.log(`Example app listening on port !`);
});
