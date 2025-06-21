const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();


const quizRoute = require('./routes/quizRoute');

const app = express();

const PORT = process.env.PORT || 3001;

app.use('/api/quiz', quizRoute);

app.listen(PORT, () => {
    console.log('Servert started successfully !');
})