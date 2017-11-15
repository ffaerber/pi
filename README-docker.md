

## Install Docker
burn SD via CLI or via via etcher.app
- flash microSD
- touch /Volumes/boot/ssh
- echo gpu_mem=16 >> /Volumes/boot/config.txt

boot pi
- ssh pi@raspberrypi.local | raspberry
- sudo apt-get update && sudo apt-get install vim git -y

change hostname from raspberry to pi1
- sudo vim /etc/hosts
- sudo vim /etc/hostname

change the password from raspberry to xxx
- passwd

- sudo reboot
- cat ~/.ssh/id_rsa.pub | ssh pi@monsterborg.local 'umask 0077; mkdir -p .ssh; cat >> .ssh/authorized_keys && echo "Key copied"'

- ssh pi@pi5.local

- curl -sSL https://get.docker.com | sh

- sudo usermod -aG docker pi
- sudo systemctl enable docker
- sudo reboot


ssh -nNT -L 9999:/var/run/docker.sock pi@home.ffaerber.com -v
export DOCKER_HOST=localhost:9999


## Docker
- Remove Single Image: `docker rmi -f 4244d33b9b0e`

- run container: `docker run -d --name portainer -p 80:9000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer:arm`
docker run -it ffaerber/geth-arm


apt-get update
apt-get install iputils-ping


cat ~/.ssh/id_rsa.pub | ssh pi@pi1.local 'umask 0077; mkdir -p .ssh; cat >> .ssh/authorized_keys && echo "Key copied"'

docker-machine create --driver generic --generic-ip-address 192.168.0.11 --generic-ssh-user pi --generic-ssh-key ~/.ssh/id_rsa pi1

docker-machine create --driver generic --generic-ip-address 192.168.0.11  --generic-ssh-key ~/.ssh/id_rsa pi

docker network create -d overlay mynet

## Docker Swarm
https://github.com/ManoMarks/docker-swarm-visualizer
- create network `docker network create --driver overlay overnet`
- create service: `docker service create --name mqtt --network overnet --replicas 2 --publish 1883:1883 ffaerber/mqtt-broker-on-arm`

- create service: `docker service create --name=guid -p=80:9000 --replicas=4 alexellis2/guid-generator-arm:0.1`

- create service: `docker service create --replicas=1 --name redis alexellis2/redis-arm:v6`
- create service: `docker service create --replicas=2 --name counter --publish 3000:3000 alexellis2/arm_redis_counter`

docker service create --name web --replicas 3 --mount type=bind,src=/etc/hostname,dst=/usr/share/nginx/html/index.html,readonly --publish 80:80 alexellis2/nginx-arm


for i in {1..5}; do curl http://ffaerber.mooo.com/whoami; done


## docker machine

cat ~/.ssh/id_rsa.pub | ssh pirate@pi1.local 'umask 0077; mkdir -p .ssh; cat >> .ssh/authorized_keys && echo "Key copied"'

docker-machine create \
  --driver generic \
  --generic-ip-address 192.168.1.10 \
  --generic-ssh-key ~/.ssh/id_rsa \
  --generic-ssh-user pirate \
  pi1

## Docker Stack Deploy
https://docs.docker.com/compose/compose-file/

- docker network create --driver overlay traefik
- docker secret create private_key ./private.key
- docker secret create certificate_crt ./certificate.crt
- docker stack deploy -c docker-stack.yml home
- docker stack rm production


- start/scale service: `docker service scale counter=3`

- list All Services: `docker service ls`
- list All Nodes: `docker node ls`

- Stop Service: `docker service rm a4cvm11927eo`

- get service info `docker service inspect whoami`
- `docker service ps whoami`

- tail logs from running conatiner `sudo docker exec -i -t b5e6dbb35417 /bin/bash`

docker logs b5e6dbb35417 -f



## Docker Compose bundles for Swarm Mode
- https://docs.docker.com/compose/bundles/
- Start Cluster via Docker Compose: `docker-compose up -d`
- Scale Redis via Docker Compose: `docker-compose scale redis=10`
- Stop Cluster via Docker Compose: `docker-compose down -v`

## Docker CleanUp Commands
- `docker system prune`
- Stop all Containers: `docker stop $(docker ps -a -q)`
- Remove all Containers: `docker rm $(docker ps -a -q)`
- Remove all Images: `docker rmi $(docker images)`
- Remove all Volumes: `docker volume rm $(docker volume ls)`

## Docker Hierarchy
- Docker Container
- Docker Service
- Docker Stack
- Docker Swarm
- Docker Engine
- Docker Host
- OS
- Hardware
