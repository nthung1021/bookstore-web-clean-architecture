# Backend Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Copy file .env nếu cần, hoặc mount từ docker-compose
EXPOSE 3000

CMD ["npm", "start"]
