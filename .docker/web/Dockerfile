FROM nginx:1.15.5

COPY server.crt /etc/nginx/server.crt
COPY server.key /etc/nginx/server.key
COPY mysite.template /etc/nginx/conf.d/default.conf

EXPOSE 443
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
