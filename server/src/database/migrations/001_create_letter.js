exports.up = function(knex){
    return knex.schema.createTable('letters', table =>{
            table.increments('id').primary();
            table.string('name').notNullable();
            table.string('city').notNullable();
            table.string('state').notNullable();
            table.string('letter').notNullable();
            table.string('whatsapp').notNullable();
            table.string('email').notNullable();
    });
}

exports.down = function(knex){
    return knex.schema.dropTable('letters');
}