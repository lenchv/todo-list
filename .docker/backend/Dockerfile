FROM node:10.11.0

ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir -p /backend
WORKDIR /backend

COPY ./backend/pm2.config.json /etc/pm2.config.json
COPY ./backend/package*.json /backend/

RUN npm install pm2 -g

CMD pm2-runtime start /etc/pm2.config.json

EXPOSE 3000
