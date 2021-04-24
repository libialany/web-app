FROM node:14
ARG build_date
LABEL build_date=${build_date}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8030
CMD ["node","server.js"]
