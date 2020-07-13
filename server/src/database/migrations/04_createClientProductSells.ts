import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('client_products_sells', table => {
        table.increments('id').primary();

        table.integer('client_id')
            .notNullable()
            .references('id')
            .inTable('clients')

        table.integer('products_id')
            .notNullable()
            .references('id')
            .inTable('products')

        table.integer('sells_id')
            .notNullable()
            .references('id')
            .inTable('sells')
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('client_products_sells')
}

