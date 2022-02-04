FROM node:17-alpine

COPY --from=mwader/static-ffmpeg:4.4.1 /ffmpeg /usr/local/bin/
COPY --from=mwader/static-ffmpeg:4.4.1 /ffprobe /usr/local/bin/
COPY --from=mwader/static-ffmpeg:4.4.1 /qt-faststart /usr/local/bin/

RUN apk add --update libtool automake gcc autoconf nasm libpng-dev pkgconfig python2 py-pip procps git g++ libc6-compat libjpeg-turbo-dev make

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

USER node

RUN mkdir ~/.npm-global && mkdir ~/.npm-global/lib && npm i npm@latest -g && npm i mhy@latest -g --legacy-peer-deps
