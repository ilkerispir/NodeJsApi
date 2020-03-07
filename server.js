const express = require('express');
const app = express();
var getJSON = require('get-json')

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    getJSON('http://staging1.alo-tech.com/api/?function=reportsCDRLogs&startdate=2017-08-01%2012:00:00&finishdate=2017-08-04%2013:00:00&app_token=ag9zfnRlbGVmb25pLXRlc3RyHwsSElRlbmFudEFwcGxpY2F0aW9ucxiAgICw46OcCQyiARVzdGFnaW5nMS5hbG8tdGVjaC5jb20', function(error, response){
        res.render('index', {data:response.CallList});
    }); 
});

const server = app.listen(process.env.PORT || 8080, () => {
    const host = server.address().address;
    const port = server.address().port;
});

