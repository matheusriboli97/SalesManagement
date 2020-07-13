import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('sells', table => {
        table.increments('id').primary();
        table.boolean('delivered').notNullable();
        
        table.integer('client_id')
            .notNullable()
            .references('id')
            .inTable('clients')

        table.integer('products_id')
            .notNullable()
            .references('id')
            .inTable('products')
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('sells')
}

