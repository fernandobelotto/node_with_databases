# Conectando node com mongo

Para isso vamos usar o docker para facilitar o processo, já que só instalando o docker conseguimos iniciar o postgre sem a necessidade de instalar.

## Passo a passo

1. Instale o docker na sua máquina usando esse
   [link do docker](https://www.docker.com/get-started/)

1. Instale o mongo compass (uma ferramenta para gerenciar mongodb) [nesse link](https://www.mongodb.com/download-center/compass)

1. Para iniciar o docker abra seu terminal e execute o comando a seguir. Ele vai criar um container do docker, que vai rodar o postgre.

   ```
   docker run --name some-mongo -d mongo:latest
   ```

1. depois, para se conectar ao postgre, abra o terminal e execute o comando a seguir.

   ```
   docker exec -it some-mongo mongo
   ```

1. agora vamos ver as databases que temos

      ````
      show dbs
      ````

1. vamos criar uma database chamada letscode:

      ````
      use letscode
      ````

1. pronto, agora temos uma database, com uma tabela e uma entry nessa tabela. Vamos ao código!

      ```
      db.users.insertOne({
         name: "John",
         age: 30,
         city: "New York",
         state: "NY",
         country: "USA",
         address: {
            street: "Wall Street",
            zip: "10001",
            building: "1A",
         },
         categories: ["books", "movies", "music", "games"],
      })
      ```

1. para verificar agora com a coleção criada com um objeto, rode o comando:

      ````
      db.users.find().pretty()
      ````

1. perfeito, vamos ao código agora!