#!/usr/bin/env bash

set +x
set +e
set +v

export COMMIT_SHA=$(git rev-parse HEAD)

docker build -t fernblick-ui:$COMMIT_SHA .;
docker stop $(docker ps --format '{{.Names}}' | grep fernblick-ui-);

docker run -d --name fernblick-ui-$COMMIT_SHA -p 0.0.0.0:80:80 fernblick-ui:$COMMIT_SHA;

