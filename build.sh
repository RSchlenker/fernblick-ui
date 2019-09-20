#!/usr/bin/env bash

set +x
set +e
set +v

export COMMIT_SHA=$(git rev-parse HEAD)
export RAND_TAG_NAME=$(head /dev/urandom | tr -dc a-z0-9 | head -c 13)

docker build -t fernblick-ui:$COMMIT_SHA .;
docker stop $(docker ps -q -f name=fernblick-ui-);

docker run -d -p 0.0.0.0:7890:80 --label="traefik.http.routers.fernblick.rule=Host(\`fernblick.schlenker.io\`)" --name=fernblick-ui-$RAND_TAG_NAME fernblick-ui:$COMMIT_SHA;

