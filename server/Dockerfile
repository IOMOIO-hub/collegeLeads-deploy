FROM node:lts

WORKDIR /express-docker

COPY package*.json ./
RUN npm install

COPY . .

CMD [ "node", "index.js" ]