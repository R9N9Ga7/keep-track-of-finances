FROM node:15-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i npm@latest -g
RUN npm i

COPY . .
