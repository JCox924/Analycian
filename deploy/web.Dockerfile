# Stage 1: build the frontend
FROM node:20 AS build
WORKDIR /usr/src/app
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

# Stage 2: serve with Nginx
FROM nginx:stable
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
