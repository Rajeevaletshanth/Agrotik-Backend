const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const rateLimit = require("express-rate-limit");
const compression = require('compression');
const helmet = require('helmet');
require('dotenv').config()

app.use(cors());
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: false
}));

app.use(compression());
app.use(helmet());

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, //1 minute
    max: 30, 
    statusCode: 500,
    message: {
        "text": "limit exceeded"
    }
});

app.use('/api/v1', limiter);

const admin = require('./routes/adminRoute');
const user = require('./routes/userRoute')

app.use('/api/v1/admin', admin)
app.use('/api/v1/user', user)


app.listen(process.env.PORT, (() => {
    console.log(`APP running on ${process.env.PORT}`)
}))