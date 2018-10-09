FROM node:10.11.0

ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir -p /frontend
WORKDIR /frontend

COPY ./frontend/package*.json /frontend/

RUN npm install
RUN npm install http-server -g

CMD if [ ${APP_ENV} = production ]; \
        then \
            npm run build && \
            cd build && \
            hs -p 3000; \
        else \
            npm run start; \
        fi

EXPOSE 3000