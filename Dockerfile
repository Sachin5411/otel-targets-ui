# Use the official Node.js 20 image as the base image
FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm install
EXPOSE 3000

ENV PORT 3000


CMD ["npm","start"]