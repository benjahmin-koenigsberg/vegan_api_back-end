import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './mongoDb/connect.js';


dotenv.config();

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '50mb' }));

// app.use('/api/v1/post', postRoutes)
// app.use('/api/v1/dalle', dalleRoutes)

app.get('/', async (req, res) => {
    res.send('Hello from Vegan Meme API')
})

// app.use(express.static(path.join(__dirname, 'build')));

//     app.get('/*', function (req, res) {
//         res.sendFile(path.join(__dirname, 'build', 'index.html'));
//     });

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
