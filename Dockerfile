# https://nodejs.org/en/docs/guides/nodejs-docker-webapp
FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 8080
CMD ["node", "index.js"]

# docker build . -t dmartinezfernandez/node-web-app
# docker run --name node-web-app -p 49160:8080 -d dmartinezfernandez/node-web-app

# TO DO: https://docs.github.com/en/actions/publishing-packages/publishing-docker-images