#!/bin/bash

if [[ $1 = "development" || $1 = "production" ]] && [[ $2 = "up" || $2 = "down" ]]; then 
    cd ..
    fileEnv=".docker/docker-compose.${1}.yml"
    downOrUp=$2
    echo "Running command: docker compose -f $fileEnv $downOrUp -d"
    docker compose -f $fileEnv $downOrUp -d
else 
    echo "Need to follow proper argument format: bash ./deploy.sh production|development up|down"
fi