import mongoose from 'mongoose';

const veganMeme = new mongoose.Schema({
    created_by: { type: String, required: false },
    date: { type: String, required: true },
    meme_url: { type: String, required: true },
    tags: {type: Array, required: false}
});

const veganMemeSchema = mongoose.model('veganMeme', veganMeme);

export default veganMemeSchema;
