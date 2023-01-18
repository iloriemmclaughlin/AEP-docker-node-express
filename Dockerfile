FROM node
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
EXPOSE 3003
CMD [ "node", "app.js" ]