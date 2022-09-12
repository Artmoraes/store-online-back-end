FROM node:alpine

WORKDIR /src/backend

COPY package.json .

RUN npm install

COPY . .

CMD ["node", "server.js"]