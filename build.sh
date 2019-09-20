#!/usr/bin/env bash

set +x
set +e
set +v

export COMMIT_SHA=$(git rev-parse HEAD)

docker build -t fernblick-ui:$COMMIT_SHA .;
docker rm --force fernblick-ui;

docker run -d -p 0.0.0.0:80:80 --name=fernblick-ui fernblick-ui:$COMMIT_SHA;

