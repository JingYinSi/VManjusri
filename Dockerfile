FROM node:latest as vcross-stage

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest as build-stage
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=vcross-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx-debug", "-g", "daemon off;"]

