FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --omit=dev

EXPOSE 3003

USER node

CMD ["npm", "start"]