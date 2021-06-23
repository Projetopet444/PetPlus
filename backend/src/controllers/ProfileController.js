const connection = require('../database/connection');


module.exports = {
    async index(request, response){
        const userId = request.headers.authorization;

        const pets = await connection('pets')
        .where('userId', userId)
        .select('*')

        return response.json(pets);
    }
}