#!/bin/bash

echo "Start deploy!"

ssh -t $SSH_USER@$SSH_HOST -o StrictHostKeyChecking=no -i ~/.ssh/travis_rsa -tt <<-EOF
cd ~/todo-list
git pull origin master
docker-compose pull
docker-compose run --rm backend npm install &&
docker-compose run --rm frontend npm install &&
docker-compose run --rm frontend npm run build

EOF