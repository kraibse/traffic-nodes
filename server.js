const express = require('express');
const app = express();


const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/grid', (req, res) => {
    res.render('gridmanager');
});

app.get('/tabextend', (req, res) => {
    res.render('tabextend');
});

