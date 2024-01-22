FROM node:alpine

RUN mkdir /app

COPY package.json ./app

WORKDIR /app

RUN npm install -g pnpm
RUN pnpm install

COPY ./app .

RUN pnpm build

EXPOSE 3000

CMD [ "pnpm", "start" ]