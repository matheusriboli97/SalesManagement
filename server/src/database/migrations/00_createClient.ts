import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('clients', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('adress').notNullable();
        table.integer('number').notNullable();
        table.string('city').notNullable();
        table.integer('phone').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('clients')
}

