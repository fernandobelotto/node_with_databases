# Conectando node com redis

Para isso vamos usar o docker para facilitar o processo, já que só instalando o docker conseguimos iniciar o postgre sem a necessidade de instalar.

## Passo a passo

1. Instale o docker na sua máquina usando esse
   [link do docker](https://www.docker.com/get-started/)


1. Para iniciar o docker abra seu terminal e execute o comando a seguir. Ele vai criar um container do docker, que vai rodar o postgre.

   ```
      docker run -dit --rm --name=my-redis -p 6379:6379 redis:6.0.8
      docker exec -it my-redis redis-cli
   ```

1. Agora que temos o redis rodando, podemos ir para o código!!