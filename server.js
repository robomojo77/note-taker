const express = require('express');
const path = require('path');

const app = express();

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/notes', (req, res) => {
    res
});

app.post('/api/notes', (req, res) => {
    res
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });