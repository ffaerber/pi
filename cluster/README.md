## Install Docker
burn SD via CLI or via via etcher.app
- diskutil list
- diskutil unmountdisk /dev/disk5
- sudo dd if=~/Downloads/2017-03-02-raspbian-jessie-lite.img of=/dev/rdisk5 bs=1m
- touch /Volumes/boot/ssh
- echo gpu_mem=16 >> /Volumes/boot/config.txt

boot pi
- ssh pi@raspberrypi.local | raspberry
- sudo apt-get install vim git

change hostname from raspberry to pi1
- sudo vim /etc/hosts
- sudo vim /etc/hostname

change the password from raspberry to xxx
- passwd

- sudo reboot
- cat ~/.ssh/id_rsa.pub | ssh pi@pizero.local 'umask 0077; mkdir -p .ssh; cat >> .ssh/authorized_keys && echo "Key copied"'

- ssh pi@pi1.local

install newest docker  
- curl -sSL test.docker.com | sh
- sudo usermod -aG docker pi
- sudo systemctl enable docker
- sudo reboot

docker swarm join \
    --token SWMTKN-1-64a25tiislewa1xlkbzpvuwdn44oteeqqg1lujmj9k4dzkt2kk-ceqzuu0rdmb8wti5tldth7z2w \
    [pi1.local]:2377


## Docker
- Remove Single Image: `docker rmi -f 4244d33b9b0e`

- run container: `docker run -d --name portainer -p 80:9000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer:arm`
docker run -it armhf/ubuntu
apt-get update
apt-get install iputils-ping


cat ~/.ssh/id_rsa.pub | ssh pi@pi1.local 'umask 0077; mkdir -p .ssh; cat >> .ssh/authorized_keys && echo "Key copied"'

docker-machine create --driver generic --generic-ip-address 192.168.0.11 --generic-ssh-user pi --generic-ssh-key ~/.ssh/id_rsa pi1

docker-machine create --driver generic --generic-ip-address 192.168.0.11  --generic-ssh-key ~/.ssh/id_rsa pi

docker network create -d overlay mynet

## Docker Swarm
https://github.com/ManoMarks/docker-swarm-visualizer
- create network `docker network create --driver overlay webnet`
- create service: `docker service create --name whoami --publish 80:8000 hypriot/rpi-whoami`

- create service: `docker service create --name=guid -p=80:9000 --replicas=4 alexellis2/guid-generator-arm:0.1`

- create service: `docker service create --replicas=1 --name redis alexellis2/redis-arm:v6`
- create service: `docker service create --replicas=2 --name counter --publish 3000:3000 alexellis2/arm_redis_counter`

docker service create --name web --replicas 3 --mount type=bind,src=/etc/hostname,dst=/usr/share/nginx/html/index.html,readonly --publish 80:80 alexellis2/nginx-arm


## Docker Stack Deploy
https://docs.docker.com/compose/compose-file/

- docker stack deploy --compose-file docker-compose.yml mycluster
- docker stack rm mycluster


- start/scale service: `docker service scale counter=3`

- list All Services: `docker service ls`
- list All Nodes: `docker node ls`

- Stop Service: `docker service rm a4cvm11927eo`

- get service info `docker service inspect whoami`
- `docker service ps whoami`


## Docker Compose bundles for Swarm Mode
- https://docs.docker.com/compose/bundles/
- Start Cluster via Docker Compose: `docker-compose up -d`
- Scale Redis via Docker Compose: `docker-compose scale redis=10`
- Stop Cluster via Docker Compose: `docker-compose down -v`

## Docker CleanUp Commands
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

# Links
- https://technologyconversations.com/2016/08/01/integrating-proxy-with-docker-swarm-tour-around-docker-1-12-series/
- http://blog.scottlogic.com/2016/08/30/docker-1-12-swarm-mode-round-robin.html
- https://github.com/alexellis/swarmmode-tests/blob/master/arm/README.md
- http://blog.alexellis.io/live-deep-dive-pi-swarm/
- http://blog.hypriot.com/getting-started-with-docker-and-mac-on-the-raspberry-pi/
- https://medium.com/@bossjones/how-i-setup-a-raspberry-pi-3-cluster-using-the-new-docker-swarm-mode-in-29-minutes-aa0e4f3b1768#.2xvqrcykt
- https://blog.codeship.com/nginx-reverse-proxy-docker-swarm-clusters/#disqus_thread

# Flash SDcard
- Locate SD Card: `diskutil list`
- Unmount the SD Card: `diskutil unmountDisk /dev/disk3`
- Burn Image on SDCard: `sudo dd bs=1m if=~/Downloads/pi-image.img of=/dev/rdisk3`
- To see progress while it is running just type control-t
