const express = require('express');
const app = express();

const PORT = 5000;
app.get('/', (req, res) => {
    res.send('A test request response was received');
});


app.listen(PORT, (req, res) => {
    console.log(`Server started on PORT: ${PORT}`);
});