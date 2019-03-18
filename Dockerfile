FROM node:latest as vmanjusri-stage

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest as build-stage
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=vmanjusri-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx-debug", "-g", "daemon off;"]

