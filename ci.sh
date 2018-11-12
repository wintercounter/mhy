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

docker image rm mhy

docker login -u "$DOCKER_LOGIN" -p "$DOCKER_PASS"
check $?

docker tag mhy wintercounter/mhy:${VERSION}
check $?
docker push wintercounter/mhy:${VERSION}
check $?

docker tag mhy wintercounter/mhy:latest
check $?
docker push wintercounter/mhy:latest
check $?