#light-weight production ready web server
FROM nginx:alpine

#copy website static files to NGINX content root
COPY . /usr/share/nginx/html

#NGINX runs by default in foreground, so no entrypoint needed