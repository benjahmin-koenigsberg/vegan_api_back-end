import mongoose from 'mongoose';

const veganMeme = new mongoose.Schema({
    created_by: { type: String, required: false },
    date: { type: String, required: false },
    meme_url: { type: String, required: false },
    file_name: { type: String, required: false },
    tag: {type: String, required: false }
});

const veganMemeSchema = mongoose.model('veganMeme', veganMeme);

export default veganMemeSchema;
