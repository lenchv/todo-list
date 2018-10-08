FROM node:10.11.0

ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir -p /frontend
WORKDIR /frontend

COPY frontend /frontend

RUN npm install

CMD if [ ${APP_ENV} = production ]; \
        then \
            npm install http-server -g && \
            npm run build && \
            cd build && \
            hs -p 3000; \
        else \
            npm run start; \
        fi

EXPOSE 3000