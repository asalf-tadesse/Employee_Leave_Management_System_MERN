const router = require ('./routes/EmployeeRoutes')
const routers=require ('./routes/HRRoutes');
const bodyparser = require ('body-parser');
// const routes = require ('./routes/TKRoutes');

const express = require('express');
const app = express();
app.use(express.json());
app.use(bodyparser.json());

const PORT = 5000;

app.use('/', routers)
//app.use('/api', routers);
// app.use(routers);
// app.use(routes);

app.listen(PORT, (req, res) => {
    console.log(`Server started on PORT: ${PORT}`);
});