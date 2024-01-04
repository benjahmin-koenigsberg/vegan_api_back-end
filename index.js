import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './mongoDb/connect.js';
import { v2 as cloudinary } from 'cloudinary';
import veganMeme from './mongoDb/models/veganMeme.js';


dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '50mb' }));



app.get('/api/v1', async (req, res) => {
    res.send('Hello from Vegan Meme API')
})

app.post('/api/v1/add', async (req, res) => {
    try {
        //const photoUrl = await cloudinary.uploader.upload(photo);
        const { created_by,  meme_url, tags } = req.body;
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



const startServer = async () => {

    try {
        connectDb(process.env.MONGO_URL)
        app.listen(process.env.PORT, () => {
            console.log(`Server has started port ${process.env.PORT} 🚀`)
        })
    } catch (error) {
        console.log(error)

    }

}

startServer()
