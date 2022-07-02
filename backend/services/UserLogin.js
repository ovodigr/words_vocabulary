import mongoose from "mongoose";

const UserLogin = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: String, required: true },

}
);

export default mongoose.model('users', UserLogin);
