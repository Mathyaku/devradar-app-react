const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocker } = require('./websocket');

const app = express();

const server = http.Server(app);

setupWebsocker(server);

mongoose.connect(
    "mongodb+srv://devradar-react-web:devradar-react-web@cluster0-tblk3.mongodb.net/devradar?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
app.use(cors());
app.use(express.json());
app.use(routes);


server.listen(3333);