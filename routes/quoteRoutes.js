import express from 'express'
import quotes from '../assets/quotes.js'
import { authorOptions } from '../assets/quotes.js';

const router = express.Router();



//get all
router.route('/all').get( (req, res) => {
    try {
        res.status(200).json({ success: true, data: quotes });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Fetching quotes failed, please try again' });
    }
});

//get random
router.route('/random').get( (req, res) => {
    const randomQuote = quotes[(Math.floor(Math.random() * quotes.length))]
    try {
        res.status(200).json({ success: true, data: randomQuote });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Fetching quotes failed, please try again' });
    }
});



//get all authors
router.route('/authors').get( (req, res) => {
    try {
        res.status(200).json({ success: true, data: authorOptions });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Fetching quotes failed, please try again' });
    }
});



//get by id
router.route("/id/:id").get( (req, res) => {
    const id = req.params.id
    const specificQuote = quotes[id]
    try {
        res.status(200).json({ success: true, data: specificQuote });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Fetching quote by Id failed, please try again' });
    }
});


//get by author
router.route("/:author").get( (req, res) => {
    const author = req.params.author
    const specificQuotes = quotes.filter((quote) => quote.author === author)
    try {
        res.status(200).json({ success: true, data: specificQuotes });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Fetching meme by Id failed, please try again' });
    }
});

export default router;
