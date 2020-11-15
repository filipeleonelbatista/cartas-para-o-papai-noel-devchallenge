const db = require('../database/connection');

module.exports = {
    async show(request, response) {
        const { id } = request.params;

        if (!id) {
            return response.status(400).json({                
                success: false,
                error: 'Missing filters to search classes'
            });
        }

        const letters = await db('letters')
            .where('letters.id', '=', id)

        return response.status(200).json(letters);
    },
    async index(request, response) {
        const filters = request.query;

        const city = filters.city;
        const state = filters.state;

        if (!filters.city || !filters.state) {
            return response.status(400).json({                
                success: false,
                error: 'Missing filters to search classes'
            });
        }

        const letters = await db('letters')
            .where('letters.city', '=', city)
            .where('letters.state', '=', state)

        return response.status(200).json(letters);
    },
    async create(request, response) {
        const {
            name,
            city,
            state,
            letter,
            whatsapp,
            email
        } = request.body;

        const trx = await db.transaction();

        try {
            await trx('letters').insert({
                name,
                city,
                state,
                letter,
                whatsapp,
                email
            });

            await trx.commit();

            return response.status(201).send({
                success: true,
                created: {
                    name,
                    city,
                    state,
                    letter,
                    whatsapp,
                    email
                }
            });

        } catch (err) {

            await trx.rollback();

            return response.status(400).json({                
                success: false,
                error: 'Unexpected error while creating new letter',
                parameters: {
                    name,
                    city,
                    state,
                    letter,
                    whatsapp,
                    email
                }
            })
        }
    }
};