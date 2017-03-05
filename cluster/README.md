

docker-machine create \
  --driver generic \
  --generic-ip-address=192.168.0.15 \
  --generic-ssh-key=/Users/ffaerber/.ssh/id_rsa \
  --generic-ssh-user=pirate \
  --engine-storage-driver=overlay \
  pi1

```
docker-machine create \
  --driver generic \
  --generic-ip-address=203.0.113.81 \
  --generic-ssh-key ~/.ssh/id_rsa \
  vm
```


curl -H Host:whoami.docker.localhost http://192.168.200.1;
curl -H Host:dockerui.docker.localhost http://192.168.200.1;



Docker Engine client  = docker -REST> Docker Demon Engine
Docker Machine client = docker-machine -REST> Docker Host





docker-machine create --driver generic --generic-ip-address=192.168.0.15 --generic-ssh-key=/Users/ffaerber/.ssh/id_rsa --generic-ssh-user=pirate --engine-storage-driver=overlay pi1





docker run -d -p 8500:8500 -v /data hypriot/rpi-consul agent -server -data-dir /data -bootstrap-expect 1 -ui-dir /ui


## Docker Commands 
- Stop all Containers: `docker stop $(docker ps -a -q)`
- Remove all Containers: `docker rm $(docker ps -a -q)`
- Remove all Images: `docker rmi $(docker images)`
- Remove Single Image: `docker rmi -f 4244d33b9b0e`
- Stop Cluster via Docker Compose: `docker-compose down -v`

## Docker Hierarchy
- Docker Container
- Docker Engine
- Docker Host
- OS
- Hardware

# Links
- http://blog.hypriot.com/getting-started-with-docker-and-mac-on-the-raspberry-pi/
- https://medium.com/@bossjones/how-i-setup-a-raspberry-pi-3-cluster-using-the-new-docker-swarm-mode-in-29-minutes-aa0e4f3b1768#.2xvqrcykt
- https://blog.codeship.com/nginx-reverse-proxy-docker-swarm-clusters/#disqus_thread

# Flash SDcard
- Locate SD Card: `diskutil list`
- Unmount the SD Card: `diskutil unmountDisk /dev/disk3`
- Burn Image on SDCard: `sudo dd bs=1m if=~/Downloads/pi-image.img of=/dev/rdisk3`
- To see progress while it is running just type control-t