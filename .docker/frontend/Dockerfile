FROM node:10.11.0

ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir -p /frontend
WORKDIR /frontend

COPY frontend /frontend

RUN npm install

CMD if [ ${APP_ENV} = production ]; \
        then \
            npm run build; \
        else \
            npm run start; \
        fi

EXPOSE 3000