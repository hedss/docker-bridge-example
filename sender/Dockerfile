FROM resin/raspberrypi3-node

WORKDIR /usr/src/app

COPY package.json package.json
RUN npm install --production

COPY . /usr/src/app

COPY sppons spoons

CMD ["npm", "start"]
