FROM node:19.2-alpine

WORKDIR  /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173


CMD ["npm", "run", "dev"]


