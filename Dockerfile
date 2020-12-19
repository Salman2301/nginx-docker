FROM node:10-alpine

WORKDIR /usr/src/app

COPY index.js ./

CMD ["node", "index.js"]

EXPOSE 3000
