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

This branch will work, because it's using HAProxy on the host network which
has an configuration pointing to static Docker bridge IPs on a pre-defined
network. This pre-defined network allows the host-bound HAProxy instance
to set the `X-Forwarded-For` header to the correct client IP, before the
Docker bridge NATs it.

