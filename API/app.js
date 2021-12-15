const express = require('express');

const DataBase = require("./database/database");

const userRoute = require("./routes/userRoute");
const groupRoute = require("./routes/groupRoute");
const agendaRoute = require("./routes/agendaRoute");
const taskRoute = require("./routes/taskRoute");
const subjectRoute = require("./routes/subjectRoute");
const searchRoute = require("./routes/searchRoute");
const authRoute = require("./routes/authRoute");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

DataBase.connect();

app.use('/users', userRoute);
app.use('/groups', groupRoute);
app.use('/agendas', agendaRoute);
app.use('/tasks', taskRoute);
app.use('/subjects', subjectRoute);
app.use('/search', searchRoute);
app.use('/auth', authRoute);

app.listen(port, () => console.log(`http://localhost:${port}/`));