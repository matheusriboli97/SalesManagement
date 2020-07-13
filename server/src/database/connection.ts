import knex from 'knex';
import path from 'path';
const connection = knex({
	client: 'sqlite3', // Pq estou utilizando o sqlite. tem as op na doc do knex
	connection: {
		filename: path.resolve(__dirname, 'database.sqlite') // Em __dirname eu tenho o caminho até o diretório em que eu estou, e o segundo param é o documento que será criado nesse local
	},
	useNullAsDefault: true
});

export default connection;