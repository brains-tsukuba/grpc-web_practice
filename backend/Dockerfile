FROM envoyproxy/envoy-alpine-dev
RUN apk update && apk add nodejs npm
RUN npm install -g yarn 
COPY ./backend/package.json /
COPY ./backend/index.ts index.ts 
COPY ./backend/tsconfig.json /
RUN yarn install 
RUN yarn build
COPY ./backend/envoy.yaml /
COPY ./client/dist /dist
RUN ls /dist
COPY ./backend/run.sh /
RUN chmod a+rwx /run.sh
EXPOSE 80
EXPOSE 8080
EXPOSE 8081
ENTRYPOINT /run.sh