const express = require('express');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const errorHadler = require('./middlewares/errorMiddleware');

require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', userRouter);
app.use('/admin', adminRouter);

app.use(errorHadler.notFound);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})

