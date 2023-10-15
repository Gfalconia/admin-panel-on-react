FROM node:18-alpine as build
WORKDIR /admin/
COPY public/ /admin/public
COPY src/ /admin/src
COPY package.json /admin/
RUN npm install
RUN npm run build

FROM nginx:1.23.1-alpine
EXPOSE 80
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/dist /usr/share/nginx/html
