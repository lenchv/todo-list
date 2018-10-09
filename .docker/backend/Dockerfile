FROM node:10.11.0

ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir -p /backend
WORKDIR /backend

COPY ./backend/pm2.config.json /etc/pm2.config.json
COPY ./backend/package*.json /etc/

RUN npm install
RUN npm install pm2 -g

CMD if [ ${APP_ENV} = production ]; \
        then \
            pm2-runtime start /etc/pm2.config.json --only server-api; \
        else \
            pm2-runtime start /etc/pm2.config.json --only dev-server-api; \
        fi

EXPOSE 3000
