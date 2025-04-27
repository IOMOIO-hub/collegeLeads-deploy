FROM node:lts as build

WORKDIR /vue-docker

COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine

RUN mkdir /vue-docker

COPY --from=build /vue-docker/dist /usr/share/nginx/html
COPY --from=build /vue-docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080

CMD [ "nginx", "-g", "daemon off;"]