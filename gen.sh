GRPC_WEB_PLUGIN_PATH=/usr/local/bin/protoc-gen-grpc-web
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
DIST_DIR=./proto

protoc -I=${DIST_DIR} ./proto/echo.proto \
--js_out=import_style=commonjs,binary:${DIST_DIR} \
--grpc-web_out=import_style=typescript,mode=grpcwebtext:${DIST_DIR}
