FROM node:18-alpine AS build-stage

WORKDIR /app

RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
RUN pnpm run build

FROM nginx:alpine AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./data /usr/share/nginx/html/data

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]