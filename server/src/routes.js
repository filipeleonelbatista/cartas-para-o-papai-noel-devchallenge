const express = require('express');

const routes = express.Router();
const db = require('./database/connection');

const LetterController = require('./controller/LetterController')

routes.get('/letters', LetterController.index);
routes.get('/letters/:id', LetterController.show);
routes.post('/letters', LetterController.create);

routes.get("/", async (request, response) => {
    try {
        const letters = await db('letters').select('*');
        return response.status(200).json({                                       
            success: true,
            letters
        });
    } catch (error) {
        
        return response.status(400).json({
            success: false,
            error_mesage: error
        });
    }
});

module.exports = routes;