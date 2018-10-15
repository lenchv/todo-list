# My ToDo App

Start project:

> docker-compose run --rm frontend npm install
> docker-compose run --rm backend npm install
> docker-compose run --rm up -d

In order to add new npm library the next command should be run:

> docker-compose run --rm frontend npm install \<lib\>

## Containers description

1) `frontend` - the React application. If `APP_ENV=production` then bundles are compiled to the directory `frontend/buld` and it has access on `:3000` port. If `APP_ENV=development` enabled hot relading and build has access on `:3000` port as well.

2) `backend` - API server.

3) `web` - nginx server that proxies `frontend` and `backend` containers. HTTPS is enabled. On production the files `.docker/web/server.crt` and `.docker/web/server.key` need to be changed on valid.

4) `mongodb` - the main database container. This container is accessed only by `backend` network. 

4) `elasticsearch` - secondary database. It used for searching.

*Notes*:

Elasticsearch container errors:

1) *max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]*

On the host OS next command is needed to be executed:

```
sysctl -w vm.max_map_count=262144
```

2) If *AccessDeniedException* is occured it needs to share rights for elasticsearch user:

```
chown 1000:1000 .esdata
```
