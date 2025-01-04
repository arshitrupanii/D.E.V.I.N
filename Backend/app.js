import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import connectdb  from './db/db.js';


connectdb();

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) =>
    res.send('Hello World!')
);


export default app;
