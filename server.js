const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send({
        name: 'Ashish',
        city: 'Agra'
    });
});  

app.get('/about', (req, res) => {
    res.send('About page goes here...!!');
});

app.get('/bad', (req, res) => {
    res.send('This is a bad request...!!');
});
app.listen(3000);