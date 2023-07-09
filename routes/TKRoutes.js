const express=require('express');
const routes=express.Router();
module.exports = routes;

// Time Keeper routes
routes.put('api/tk/employees', (req, res) => {
    res.send('Timekeeper page');
});