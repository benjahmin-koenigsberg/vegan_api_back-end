import mongoose from 'mongoose';

const user_uploads = new mongoose.Schema({
    etag: { type: String, required: false },
    created_by: { type: String, required: false },
    date: { type: String, required: false },
    meme_url: { type: String, required: false },
    file_name: { type: String, required: false },
    tag: { type: String, required: false },
    width: { type: Number, required: false },
    height: { type: Number, required: false },
    format: { type: String, required: false }
});

//const user_uploads = mongoose.model('veganMeme', veganMeme);
const user_uploadSchema = mongoose.model('user_uploads', user_uploads);


export default user_uploadSchema
