FROM node:16.13.2
ARG API_URL
WORKDIR /app

RUN chmod -R 755 ./

COPY ./frontend ./
RUN npm install --unsafe-perm

RUN API_URL=$API_URL npm run build:prod
EXPOSE 4200
CMD ["npm","run","start:prod"]
