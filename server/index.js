require('dotenv').config();

const express = require('express');
const cors = require('cors');
const {User} = require('./models/user')
const {register, login} = require('./controllers/login')
const {isAuthenticated} = require('./middleware/isAuthenticated')

const app = express();

app.use(express.json())
app.use(cors())

app.post('/register', register)
app.post('/login', login)

app.listen(3000, () => console.log('Server is running on port 3000'))