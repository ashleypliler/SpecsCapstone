require('dotenv').config();
const {PORT, CONNECTION_STRING} = process.env
const express = require('express');
const cors = require('cors');
// const {register, login} = require('./controllers/login')
const {Sequelize} = require('sequelize');

const app = express();

app.use(express.json())
app.use(cors())

const sequelize = new Sequelize('postgresql://ashleypliler:v2_4322v_Qaxb6DwVicaTzTaGEAk3TWm@db.bit.io:5432/ashleypliler/golden', {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
});

sequelize.authenticate().then(() => {

    app.post('/register', async (req, res) => {
        const {username, password} = req.body;
        const user =  await sequelize.query(
            `insert into users (
                username,
                password
            ) values (
                '${username}',
                '${password}'
            );`
        )
        res.status(200).send(user);
    })

    app.post('/login', (req, res) => {
        console.log('login')
    })
        
        
    app.listen(4567, () => console.log(`Server is running on port 4567`))
})

