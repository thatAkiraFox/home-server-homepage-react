FROM docker.io/node:20-alpine as build-stage

WORKDIR /app
COPY package.json ./
RUN npm install

COPY . ./
RUN npm run build

FROM docker.io/alpine:latest

RUN apk add -U --no-cache lighttpd

COPY lighttpd.conf /
COPY --from=build-stage /app/dist/ /www/

RUN mkdir -p /www/config

EXPOSE 8080

CMD ["lighttpd", "-D", "-f", "/lighttpd.conf"]