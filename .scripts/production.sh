#!/bin/bash

ssh -tt $SSH_USER@$SSH_HOST <<-EOF
cd ~/todo-list
git pull origin master
docker-compose pull
docker-compose run --rm backend npm install
docker-compose run --rm frontend npm install
docker-compose run --rm frontend npm run build
EOF