#!/usr/bin/env bash

export DEPLOYMENT_USER=deleadon
export DEPLOYMENT_HOST=schlenker.io

echo 'updating git repository'
ssh $DEPLOYMENT_USER@$DEPLOYMENT_HOST -i ~/.ssh/contabo 'cd ~/projects/fernblick/fernblick-ui/; git pull origin master;'

echo 'starting build and deployment'
ssh $DEPLOYMENT_USER@$DEPLOYMENT_HOST -i ~/.ssh/contabo 'cd ~/projects/fernblick/fernblick-ui/; ./build.sh'
