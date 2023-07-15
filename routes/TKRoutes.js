const express=require('express');
const routes=express.Router();


// Time Keeper routes
routes.put('/api/tk/employees', (req, res) => {
    res.send('Timekeeper page');
});

module.exports = routes;