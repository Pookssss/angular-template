# Stage : npm install , npm run build
FROM  node:lts-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . .

RUN npm run build:prod

# Stage : Copy file to webserver
FROM nginx:stable-alpine as production-stage

COPY --from=build /app/dist/moph-buddy-ui /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

# If image can't use open tag for check file in /usr/share/nginx/html
# RUN ls -al /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
