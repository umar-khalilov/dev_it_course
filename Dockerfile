FROM ubuntu:21.04
MAINTAINER ERMASTER100@gmail.com
RUN apt-get update
RUN apt-get install -y nginx
COPY . /var/www/html/
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]