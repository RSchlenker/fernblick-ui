#!/usr/bin/env bash

set +x
set +e
set +v

export COMMIT_SHA=$(git rev-parse HEAD)
export RAND_TAG_NAME=$(head /dev/urandom | tr -dc a-z0-9 | head -c 13)

yarn install
yarn build

docker build -t brimborium-ui:$COMMIT_SHA .;
docker stop $(docker ps -q -f name=brimborium-ui-);

docker run -d -p 0.0.0.0:7890:80 --label="traefik.http.routers.brimborium.rule=Host(\`fernblick.schlenker.io\`)" --name=brimborium-ui-$RAND_TAG_NAME brimborium-ui:$COMMIT_SHA;

