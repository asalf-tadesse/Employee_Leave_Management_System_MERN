const express = require('express');
const router = express.Router();


// HR routers 
router.post('/api/hr/employees/register', (req, res) => {
    //res.send('emp register page');
    //const {name, basic} = req.body;
    //res.json(req.body);
    const {name, basic} = req.body;
    if (!name || !basic) {
        throw new Error ('Please provide a name and basic');
    }
    else {
        res.send(JSON.stringify(name));
        console.log(req.body.name);
    }

    //res.send(req.body);
});

router.get('/api/hr/employees/:id', (req, res) => {
    res.send('view emp page');
});

router.put('/api/hr/employees/register/:id', (req, res) => {
    res.send('edit emp page');
});

router.delete('/api/hr/register/:id', (req, res) => {
    res.send('del emp page');
});

router.post('/api/hr/leave/policy', (req, res) => {
    res.send('create policy page');
});

router.get('/api/hr/leave/policy', (req, res) => {
    res.send('put policy page');
});

router.put('/api/hr/leave/policy', (req, res) => {
    res.send('policy update page');
});

router.patch('/api/hr/leave/request', (req, res) => {
    res.send('leave patch page');
});

module.exports=router;