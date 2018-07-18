FROM resin/resin-base:v4.2.1

WORKDIR /usr/src/app

EXPOSE 80

COPY package.json package.json
RUN npm install --production

COPY . /usr/src/app

CMD ["npm", "start"]
