FROM node:20

WORKDIR /usr/src/app

COPY . .

ENV VITE_BACKEND_URL=http://localhost:8080/api

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
