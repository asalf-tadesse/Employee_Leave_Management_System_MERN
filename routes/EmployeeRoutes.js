//const routes = require ('express-router');
const express = require('express');
const router = express.Router();

// app.post('/api/employee/login', (req, res) => {
//     res.send('login page');
// });

// app.post('/api/employee/leave/request', (req, res) => {
//     res.send('request page');
// });

router.post('/api/employee/login', (req, res) => {
    res.send('login page');
});

router.post('/api/employee/leave/request', (req, res) => {
    res.send('request page');
});

module.exports = router;

