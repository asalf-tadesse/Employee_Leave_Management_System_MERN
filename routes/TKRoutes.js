const express=require('express');
const routes=express.Router();
module.exports = routes;

// Time Keeper routes
routes.put('api/tk/employees', (req, res) => {
    res.send('Timekeeper page');
    next(); {
        res.send('Timekeeper employee page');
    };
    //res.send('Employees');
});

routers.put('/tk/employees', (req, res, next) => {
    res.send('Employees');
    res.end();
});