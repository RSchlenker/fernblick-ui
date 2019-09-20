# Traefik Deployment command
`docker run -d -p 8081:8080 -p 80:80 -v $PWD/traefik.yml:/etc/traefik/traefik.yml -v /var/run/docker.sock:/var/run/docker.sock traefik:v2.0`
# Strapi Deployment commands
Executed from ~/projects/fernblick/
`docker run -e MONGO_INITDB_DATABASE=strapi            -v `pwd`/db/:/data/db            --name strapi-mongo            -d mongo`


`docker run -e APP_NAME=strapi-app            -e DATABASE_CLIENT=mongo            -e DATABASE_HOST=strapi-mongo            -e DATABASE_PORT=27017            -e DATABASE_NAME=strapi            -v `pwd`/strapi-app:/usr/src/api/strapi-app            --link strapi-mongo:mongo            -p 1337:1337            --name strapi -d strapi/strapi`

