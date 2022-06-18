import mongoose from "mongoose";

const UserLogin = new mongoose.Schema({
    username: { type: String, required: true },
    login: { type: String, required: true },
    date: { type: String, required: true },

}
);

export default mongoose.model('Login', UserLogin);
