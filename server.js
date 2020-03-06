const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('index');
});

const server = app.listen(process.env.PORT || 8080, () => {
    const host = server.address().address;
    const port = server.address().port;
});

