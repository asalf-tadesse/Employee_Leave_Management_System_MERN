const express=require('express');
const routers=express.Router();
module.exports=routers;

// HR routers 
routers.post('/api/hr/employees/register', (req, res) => {
    res.send('emp register page');
});

routers.get('/api/hr/employees/:id', (req, res) => {
    res.send('view emp page');
});

routers.put('/api/hr/employees/register/:id', (req, res) => {
    res.send('edit emp page');
});

routers.delete('/api/hr/register/:id', (req, res) => {
    res.send('del emp page');
});

routers.post('/api/hr/leave/policy', (req, res) => {
    res.send('create policy page');
});

routers.get('/api/hr/leave/policy', (req, res) => {
    res.send('put policy page');
});

routers.put('/api/hr/leave/policy', (req, res) => {
    res.send('policy update page');
});

app.patch('/api/hr/leave/request', (req, res) => {
    res.send('leave patch page');
});