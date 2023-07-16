const express=require('express');
const routers=express.Router();


// Time Keeper routes
routers.put('/tk/employees', (req, res, next) => {
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

module.exports = routers;
