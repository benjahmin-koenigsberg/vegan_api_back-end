import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './mongoDb/connect.js';
import { v2 as cloudinary } from 'cloudinary';
import veganMeme from './mongoDb/models/veganMeme.js';
import quotesRoutes from './routes/quoteRoutes.js'
import memeRoutes from './routes/memeRoutes.js'
const app = express();

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

app.use(cors())
//app.use(cors({ origin: '*' }));
app.use(express.json({limit: '50mb'}))


app.use('/api/v1', memeRoutes )
app.use('/api/v1/quotes', quotesRoutes)


// app.get('/', async (req, res, next) => {
//     res.send('Hello from Vegan Meme API')
// })

app.post('/api/v1/add' ,async (req, res) => {
    try {
       const { created_by, tag, meme_url } = req.body;
       // const memeUrl = await cloudinary.uploader.upload(image);
        console.log(req.body)

        const newVeganMeme = await veganMeme.create({
            created_by,
            date: new Date().toLocaleDateString(),
            tag,
            meme_url,
        });
        res.status(200).json({ success: true, data: newVeganMeme });

    } catch (err) {
        res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
    }
})


// app.get('/api/v1/tags', async (req, res) => {
//     const tags = ['humor', 'excuses', 'carnism', 'speciesism', 'food', 'protein', 'cogntive dissonance', 'enviroment', 'health']
//     res.send(tags)
// })


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
