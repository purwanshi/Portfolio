# Build stage
FROM node:18-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the source code
COPY . .

# Build Vite project
RUN npm run build

# Production stage with Nginx
FROM nginx:alpine

# Copy build output to Nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
