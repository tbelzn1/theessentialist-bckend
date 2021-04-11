import express from 'express';
import mongoose from 'mongoose';

import User from './models/User.js';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:MKPtlJscS46wBRst@main.7tr3z.mongodb.net/theessentialistdb?retryWrites=true&w=majority';

// Middlewares

// DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Welcome to The Essentialist API'));

app.post('/user', (req, res) => {
    const dbUser = req.body;

    User.create(dbUser, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data);
        }
    });
});

app.get('/user', (req, res) => { // Retrieve everything
    User.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(data);
        }
    });
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));