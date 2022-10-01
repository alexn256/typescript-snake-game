FROM node:16 as build

LABEL version="1.0"
LABEL maintainer="Alex Naumov"

WORKDIR /usr/app
COPY . ./
RUN npm run build

FROM nginx:alpine as final

COPY --from=build /usr/app/src/index.html /usr/share/nginx/html
COPY --from=build /usr/app/src/main.css /usr/share/nginx/html
COPY --from=build /usr/app/src/app.js /usr/share/nginx/html
COPY --from=build /usr/app/src/image/logo.png /usr/share/nginx/html

EXPOSE 80