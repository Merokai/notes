#!/bin/bash
docker run --name notesdb -e MYSQL_RANDOM_ROOT_PASSWORD=yes -e MYSQL_USER=notesdb -e MYSQL_PASSWORD=notesdb -e MYSQL_DATABASE=notesdb -p 3306:3306 --mount type=bind,source=$(pwd)/sql,target=/docker-entrypoint-initdb.d -d mariadb
