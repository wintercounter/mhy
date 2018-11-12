#!/usr/bin/env bash

check() {
	if [ "$1" != 0 ]
	then
		exit $1
	fi
}

VERSION=`node -p -e "require('./package.json').version"`

npm pub
check $?

echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
check $?

docker image rm mhy

docker build --no-cache -t mhy ./docker
check $?

docker tag mhy wintercounter/mhy:${VERSION}
check $?
docker push wintercounter/mhy:${VERSION}
check $?

docker tag mhy wintercounter/mhy:latest
check $?
docker push wintercounter/mhy:latest
check $?