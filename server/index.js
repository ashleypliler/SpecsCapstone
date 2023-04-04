require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors())

app.post('/register', register)
app.post('/login', login)

app.listen(3000, () => console.log('Server is running on port 3000'))