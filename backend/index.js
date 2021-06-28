require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index');

const PORT = process.env.PORT || 5000;

const opt = {
    useUnifiedTopology: true,
    useNewUrlParser: true 
}

const app = express();

app.use(cors({
    credentials : true,
    origin: process.env.CLIENT_URL,
}));
app.use(cookieParser());
app.use(express.json());

app.use('/api', router);

mongoose.connect("mongodb://localhost:27017/todo", opt)
        .then(() => {
            app.listen(PORT, () => console.log(`server work on ${PORT}`))
        })