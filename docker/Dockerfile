FROM node:11-stretch-slim

RUN apt-get update && apt-get install -y libtool automake autoconf nasm libpng-dev pkg-config python2.7 python-pip procps

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
USER node
RUN mkdir ~/.npm-global
RUN npm i mhy@latest -g
RUN chmod 0777 -R ~/.npm-global