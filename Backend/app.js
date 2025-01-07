import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import connectdb  from './db/db.js';
import UserRoute from './routes/user.routes.js';

connectdb();

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/register', UserRoute);

app.get('/', (req, res) =>
    res.send('Hello Worlds!')
);


export default app;
