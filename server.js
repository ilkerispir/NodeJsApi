const express = require('express');
const getJSON = require('get-json');
const bodyParser = require('body-parser'); 

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');

app.get('/', urlencodedParser, (req, res) =>{
    let id = req.query.id;
    let url = 'https://reqres.in/api/users/' + id;
    getJSON(url, function(error, data){
        res.render('index', {data:data.data});  
    }); 
});

const server = app.listen(process.env.PORT || 3000, () => {
    const host = server.address().address;
    const port = server.address().port;
});

