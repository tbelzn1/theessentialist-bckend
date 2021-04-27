import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
    },
    lname: {
        type: String,
        
    },
    email: {
        type: String,

    },
    password: {
        type: String,
        
    },
    date:{
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('User', userSchema);