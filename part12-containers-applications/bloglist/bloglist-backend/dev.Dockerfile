FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3003

CMD ["npm", "run", "dev"]