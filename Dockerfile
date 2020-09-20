# Build
FROM node:12.14.0-alpine3.11 as build

#RUN apk add --no-cache bash
#RUN touch /root/.bashrc | echo "PS1='\w\$ '" >> /root/.bashrc

WORKDIR /usr/src/app

RUN npm install @angular/cli -g

COPY *.json ./

RUN npm install

COPY . .

RUN npm run build

# Expose
FROM nginx:1.19.2-alpine

COPY --from=build /usr/src/app/dist/finansys /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
