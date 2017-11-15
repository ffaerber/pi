# PiCluster



ssh -nNT -L 9999:/var/run/docker.sock pirate@home.ffaerber.com -v
export DOCKER_HOST=localhost:9999

docker stack deploy -c docker-stack.yml home
