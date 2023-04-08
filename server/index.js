require('dotenv').config();
const {PORT} = process.env
const express = require('express');
const cors = require('cors');
const {User} = require('./models/user')
const {register, login} = require('./controllers/login')
const {sequelize} = require('./database/database');
const { Info } = require('./models/info');

const app = express();


User.hasMany(Info)
Info.belongsTo(User)


app.use(express.json())
app.use(cors())

app.post('/register', register)
app.post('/login', login)

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
}).catch(err => console.log(err));