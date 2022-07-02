import mongoose from "mongoose";

const Post = new mongoose.Schema({
    en: { type: String, required: true },
    ua: { type: String, required: true },
    // userId: { type: String, required: false, default: '' },
    // transcription: { type: String, required: false, default: '' },
    // sound: { type: String, required: false, default: '' },
    // date: { type: String, required: false, default: '' },

    userId: { type: String, required: false },
    transcription: { type: String, required: false },
    sound: { type: String, required: false },
    date: { type: String, required: false },

}
    , { strict: false }
);

export default mongoose.model('Words', Post);
