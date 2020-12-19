# Nginx Cache test using docker
  This repo is to try and test nginx setting, there is two container nodejs simply create a server and run in PORT 3000 and under nginx folder there is another Dockerfile to build nginx container and nginx.conf configuration file.


To test out different nginx setting change the conf file under ./nginx/nginx.conf and run `docker-compose up` in the root directory.
Open browser and goto http://localhost:8080 to test nginx and try again this time it will be faster under 10ms


# Bypass cache
  When the bypass is set to true, nginx will get a new response from the server and update the cache
To bypass cache add a Header `X-No-Cache` to `true`.

# Cache key
  In my case, i need to cache based on the user so, set the cache key including `$http_authorization`.
If response is same for all the user just use `$host$request_uri` instead of `$host$request_uri$http_authorization`.



