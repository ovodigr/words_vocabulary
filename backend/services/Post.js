import mongoose from "mongoose";

const Post = new mongoose.Schema({
    en: { type: String, required: true },
    ua: { type: String, required: true },

});

export default mongoose.model('Words', Post);
