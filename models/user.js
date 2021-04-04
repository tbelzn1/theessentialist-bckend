import mongoose from 'mongoose';

const user = mongoose.Schema({
    fname: String,
    lname: String,
});

export default mongoose.model('User', user);