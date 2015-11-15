var app  = require('./../app');
var port  = process.env.port || 3000;

app.listen(port, function(){
    console.log("Listening on port 3000");
});