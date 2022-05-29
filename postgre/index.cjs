// import { Client } from 'pg'; // não vai funcionar, já que o pacote não é esmodules, é commonjs
const { Client } = require("pg");

async function main() {
  // criação de um client com os valores necessários para conexão
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "letscode",
    password: "postgrespw",
    port: 55000,
  });

  // função para se conectar
  await client.connect();

  // fazer a seleção de uma tabela
  const res = await client.query("SELECT * FROM users;");

  console.log(res.rows);
  await client.end();
}

main().catch(console.error);
