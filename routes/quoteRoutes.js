import express from 'express'
import quotes from '../assets/quotes.js'

const router = express.Router();


//get all
router.route('/all').get(async (req, res) => {
    try {
        res.status(200).json({ success: true, data: quotes });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Fetching quotes failed, please try again' });
    }
});


export default router;
