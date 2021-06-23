
exports.up = function (knex) {
    return knex.schema.createTable('pets', function (table) {
        table.increments();

        table.string('name').notNullable();
        table.string('weight').notNullable();
        table.string('size').notNullable();
        table.date('date').notNullable();
        table.string('color').notNullable();
        table.string('breed').notNullable();

        table.string('userId').notNullable();

        table.foreign('userId').references('id').inTable('users');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('pets');
};
