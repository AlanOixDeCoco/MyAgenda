const express = require('express');

const DataBase = require("./database/database");

const userRoute = require("./routes/userRoute");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

DataBase.connect();

app.use('/users', userRoute);


app.listen(port, () => console.log(`http://localhost:${port}/`));

