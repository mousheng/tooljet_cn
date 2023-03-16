#!/bin/sh

docker-compose down
docker-compose build
docker-compose run --rm plugins npm run build:plugins
docker-compose up