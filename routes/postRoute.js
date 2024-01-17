import express from 'express'
import veganMeme from '../mongoDb/models/veganMeme.js';

const router = express.Router();


router.post('/add', async (req, res) => {
    try {
        const { created_by, tag, meme_url, file_name, type, asset_id, height, width } = req.body;

        const newVeganMeme = await veganMeme.create({
            created_by,
            date: new Date().toLocaleDateString(),
            tag,
            meme_url,
            file_name,
            type,
            asset_id,
            height,
            width,
        });

        //console.log(newVeganMeme)

        res.status(200).json({ success: true, data: newVeganMeme });

    } catch (err) {
        res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
    }
})


export default router;
