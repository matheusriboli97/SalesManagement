import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('products').insert([
        {name: "Gás", price: "65,00"},
        {name: "Água", price: "8,00"},
        {name: "Suco", price: "15,00"},
    ]);
} 