FROM node:22-alpine AS build-stage

WORKDIR /app
COPY package*.json ./
COPY . .

RUN npm install
RUN npm run build

FROM nginx:alpine AS production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./data /usr/share/nginx/html/data

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]