FROM node:12.4.0-alpine

WORKDIR /work/

COPY ./package.json /work/package.json

RUN npm install

COPY . /work/

CMD node .