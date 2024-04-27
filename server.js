const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT ||  5000;

//body parser here//
app.use(express.json());

app.use(errorHandler);

app.use("/api/contacts",require('./routes/contactroutes'));

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});
