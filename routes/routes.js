import express from 'express'
import { v2 as cloudinary } from 'cloudinary';
import veganMeme from '../mongoDb/models/veganMeme.js';

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

router.get('/add' , (req, res) =>{
    res.send('Hello from add endpoint')
})

router.post('/add', async (req, res) => {
    try {

        const { created_by,  meme_url, tags } = req.body;

        const meme = await cloudinary.uploader.upload(meme_url, { folder: 'vegan_memes' });
        console.log(`Successfully uploaded`);
        console.log(`> Result: ${meme.secure_url}`);

        const newVeganMeme = await veganMeme.create({
            created_by,
            date: new Date().toLocaleDateString(),
            meme_url,
            tags
        });

        res.status(200).json({ success: true, data: newVeganMeme });

    } catch (err) {
        res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
    }
});


export default router;
