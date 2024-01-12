import express from 'express'
import { v2 as cloudinary } from 'cloudinary';
import veganMeme from '../mongoDb/models/veganMeme.js';

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})



//get by id
router.get("/id/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const meme = await veganMeme.findById(id)
        res.status(200).json({ success: true, data: meme });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Fetching meme by Id failed, please try again' });
    }
});



// router.get('/add', (req, res) => {
//     res.send('Hello from add endpoint')
// })


//get all
router.route('/all').get(async (req, res) => {
    try {
        const memes = await veganMeme.find({});
        // const randomMeme = memes[(Math.floor(Math.random() * arr.length))]
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

//get random
router.get('/random/prev', async (req, res) => {
    try {
        const meme = await veganMeme.aggregate([{ $sample: { size: 1 } }])
        res.status(200).json({ success: true, data: meme[0].meme_url });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Fetching random meme failed, please try again' });
    }
});




// //get meme tags
router.get("/tags", async (req, res) => {
    console.log('tag endpoint hit')
    try {
        const tags = ['humor', 'excuses', 'carnism', 'speciesism', 'food', 'protein', 'cogntive dissonance', 'enviroment', 'health']
        res.status(200).json({ success: true, data: tags });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Fetching meme by Id failed, please try again' });
    }


});



//get by tag
router.get("/tags/:tag", async (req, res) => {
    const tag = req.params.tag
    try {
        const memes = await veganMeme.find({})
        const memesByTag = memes.filter((meme) => meme.tag === tag)
        console.log(memesByTag)
        res.status(200).json({ success: true, data: memesByTag });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Fetching meme by tags failed, please try again' });
    }

});





export default router;
