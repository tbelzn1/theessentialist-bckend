import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import User from './models/User.js';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:MKPtlJscS46wBRst@main.7tr3z.mongodb.net/theessentialistdb?retryWrites=true&w=majority';

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Welcome to The Essentialist API'));

app.post('/user', (req, res) => {
    
    const newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password
    });
    //console.log(req.body);
    newUser.save()
        .then(item => {
            res.send("user saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
    
    
    
    
    /*const dbUser = new User({
        lname: req.lname,
        fname: req.fname,
        password: req.password,
        date: req.date,
    })
    console.log(dbUser.lname);
    User.create(dbUser, (err, data) => {
        if (err) {
          res.status(500).send(err);
            console.log(err);
        }
        else {
            res.status(201).send(data);
            console.log(dbUser);
        }
        
        //res.send(post)*/
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