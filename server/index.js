const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');
const app = express();
// const port = 4000;
require('dotenv').config();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`))

const { APP_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then( db => {
    app.set('db', db)
    console.log('Database is connected')
})

app.get('/api/houses', controller.getHouses)
app.post('/api/house', controller.addHouse)
app.delete('/api/house/:id', controller.deleteHouse)

app.listen(APP_PORT, () => {
    console.log(`Listening on port ${APP_PORT}`)
})

