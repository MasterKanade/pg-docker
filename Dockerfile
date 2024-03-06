### always use  node image for the best practice.
FROM node:latest  

### copy a local file to docker container location
COPY index.js /home/app/index.js
COPY package.json /home/app/package.json

### working directory where our code is placed inside the container
WORKDIR /home/app/

### Run the command inside the workdir. It will create node_modules inside the docekr container path.
RUN npm install

### The command has to be given to execute
CMD ["node","index"]

### Expose this app outsie the container for other world
EXPOSE 9000
