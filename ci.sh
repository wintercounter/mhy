#!/usr/bin/env bash

check() {
	if [ "$1" != 0 ]
	then
		exit $1
	fi
}

VERSION=`node -p -e "require('./package.json').version"`
VERSION_LATEST=`npm view mhy version`

echo version:${VERSION}
echo version_latest:${VERSION_LATEST}

if [ ${VERSION} = ${VERSION_LATEST} ]
then
    exit 0
fi

# check babel config
echo "mhy config babel -f json --mhy-env=prod"
mhy config babel -f json --mhy-env=prod

npm pub
check $?

# Wait 2 minutes to make sure @latest is indeed the latest (npm caching is shit)
sleep 120

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