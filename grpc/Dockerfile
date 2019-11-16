FROM golang
WORKDIR /go/src/github.com/brains-tsukuba/grpc-web_practice/grpc
COPY . .
ENV GO111MODULE=on
RUN go build 
EXPOSE 50051
CMD ./grpc