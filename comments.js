// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = [{ username: 'Tam', comment: 'Hello' }, { username: 'Cam', comment: 'Hi' }];
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/comments', (req, res) => {
    res.json(comments);
});