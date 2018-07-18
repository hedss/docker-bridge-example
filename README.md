# Docker Bridge Proxy Example

Each component prints their address on startup, and then the sender makes
a request to the receiver via the host (ie. not within the bridge). The
receiver prints the address of the source of the request (which will not be
the real IP of the sender, but the Docker bridge gateway).

Set the `RECEIVE_HOST` envvar to the Docker host you're running on
(eg. `192.168.1.10`) under the `sender` service, then:
```
docker-compose up --build
```
