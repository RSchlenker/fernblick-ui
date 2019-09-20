#!/usr/bin/env bash

set +x
set +e
set +v

export OLD_COMMIT_SHA=$(git rev-parse HEAD^1)
export COMMIT_SHA=$(git rev-parse HEAD)

docker build -t fernblick-ui:$COMMIT_SHA .;
docker stop fernblick-$OLD_COMMIT_SHA;

docker run -d --name fernblick-$COMMIT_SHA -p 0.0.0.0:80:80 fernblick-ui:$COMMIT_SHA;

