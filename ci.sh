#!/usr/bin/env bash

function check {
    if [ $? ]; then
      exit $?
    fi
}

VERSION=`node -p -e "require('./package.json').version"`

npm pub
check

docker image rm mhy

echo $DOCKER_PASS | docker login -u $DOCKER_LOGIN --password-stdin
check

docker tag mhy wintercounter/mhy:${VERSION}
check
docker push wintercounter/mhy:${VERSION}
check

docker tag mhy wintercounter/mhy:latest
check
docker push wintercounter/mhy:latest
check



