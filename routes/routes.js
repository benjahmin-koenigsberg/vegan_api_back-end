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

//get all
router.route('/all').get(async (req, res) => {
    try {
        const memes = await veganMeme.find({});
        const randomMeme = memes[(Math.floor(Math.random() * arr.length))]
        res.status(200).json({ success: true, data: memes });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Fetching memes failed, please try again' });
    }
});


//get random
router.get('/random', async (req, res) => {
    try {
        const meme = await veganMeme.aggregate([{ $sample: { size: 1 } }])
        res.status(200).json({ success: true, data: meme });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Fetching random meme failed, please try again' });
    }
});



router.get("/:id",  async (req, res) => {
    const id = req.params.id;
    try {
        const meme = await veganMeme.findById(id)
        res.status(200).json({ success: true, data: meme });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Fetching meme by Id failed, please try again' });
    }
});

export default router;
