# Stage 1 — build the Ionic/Angular app
FROM node:16-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npm run build -- --configuration production

# Stage 2 — serve the static build with nginx
FROM nginx:1.25-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/www /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -qO /dev/null http://localhost/ || exit 1
