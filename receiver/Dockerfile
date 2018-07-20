FROM resin/raspberrypi3-node

WORKDIR /usr/src/app

EXPOSE 80

COPY package.json package.json
RUN npm install --production

COPY . /usr/src/app

CMD ["npm", "start"]
