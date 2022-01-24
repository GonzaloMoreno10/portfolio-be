FROM node:14

# Create app directory
WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

RUN ln -s /environment/in-quiter.env .env 

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/app.js" ]