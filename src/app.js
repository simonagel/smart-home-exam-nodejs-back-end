const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/error-handler');
const router = require('./router');
require('dotenv/config');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: '*/*' }));

app.use(logger.emptyBody);

app.get('/self', (req, res) => {
    res.json("Nikola Stojkovski A1/2");
});

app.use(router);

app.use(logger.wrongRoute);
app.use(errorHandler.handler);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`API is listenig on port ${port}!`);
});
