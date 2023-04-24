# Stage 1
FROM node:lts-alpine as build
ENV TZ=Europe/Berlin
RUN apk add --no-cache tzdata && cp /usr/share/zoneinfo/$TZ /etc/localtime
WORKDIR /app
COPY . .
RUN chmod +x ./deployment/50-substitute-env-variables.sh
RUN npm i -g pnpm && pnpm i && npm run build

# Stage 2
FROM nginx:stable-alpine as run
RUN rm -rf /usr/share/nginx/html/*
ENV TZ=Europe/Berlin
RUN apk add --no-cache tzdata && cp /usr/share/zoneinfo/$TZ /etc/localtime
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/deployment/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/deployment/50-substitute-env-variables.sh /docker-entrypoint.d/
EXPOSE 80
HEALTHCHECK CMD curl -f http://localhost/ || exit 