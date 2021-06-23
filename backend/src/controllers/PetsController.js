const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection('pets').count();

    console.log(count);

    const pets = await connection('pets')
      .join('users', 'users.id', '=', 'pets.userId')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'pets.*',
        'users.name',
        'users.email',
      ]);

    response.header('X-Total-Count', count['count(*)']);

    return response.json(pets);

  },
  async create(request, response) {
    const { name, weight, size, date, color, breed } = request.body;
    const userId = request.headers.authorization;

    const [id] = await connection('pets').insert({
      name,
      weight,
      size,
      date,
      color,
      breed,
      userId,
    });
    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const userId = request.headers.authorization;

    const pets = await connection('pets')
      .where('id', id)
      .select('userId')
      .first();

    if (pets.userId !== userId) {
      return response.status(401).json({ error: 'Operation not permitted' });
    }
    await connection('pets').where('id', id).delete();

    return response.status(204).send();
  }
};