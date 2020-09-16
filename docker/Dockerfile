FROM node:14-alpine

RUN apk add --update libtool automake gcc autoconf nasm libpng-dev pkgconfig python2 py-pip procps git g++ libc6-compat libjpeg-turbo-dev make

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

USER node

RUN mkdir ~/.npm-global
RUN npm i mhy@latest -g
