import { createClient } from 'redis';

async function main() {

    const client = createClient();

    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();

    await client.set('lets', 'code');
    await client.set('second-key', 'second-value');
    const value = await client.get('lets');

    client.quit(); // fechamos a conexão aqui
}

main().catch(console.error)