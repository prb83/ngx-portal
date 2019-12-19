### install phoenix module
``` bash
yarn add phoenix
```

### make docker ready

```bash
#build
docker build -t containername:dev .
#run
docker run -v ${PWD}:/app -v /app/node_modules -p 4201:4200 --rm containerName:dev
```