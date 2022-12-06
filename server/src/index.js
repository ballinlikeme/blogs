require('dotenv').config({
    path: "./src/.env"
})
const express = require('express');
const cors = require('cors')
const { Users, Posts } = require('./database/connections');
const sequelize = require('./database/db');
const router = require('./routes/router');

const PORT = process.env.PORT;

const app = express();
app.use(express.json())
app.use(cors());
app.use('/api', router);

async function startApp () {
    try {
        await sequelize.authenticate()
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

startApp();