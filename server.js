const express = require('express');
const app = express();
var getJSON = require('get-json')

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
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

