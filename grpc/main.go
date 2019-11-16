package main

import (
	"context"
	fmt "fmt"
	"log"
	"net"

	pb "github.com/brains-tsukuba/grpc-web_practice/grpc/proto"
	"google.golang.org/grpc"
)

type server struct{}

func (s *server) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloReply, error) {
	t := fmt.Sprintf("hello, %s", in.GetName())
	return &pb.HelloReply{Message: t}, nil
}

func main() {
	s := grpc.NewServer()
	lis, err := net.Listen("tcp", "0.0.0.0:50051")
	pb.RegisterGreeterServer(s, &server{})
	if err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
	log.Println("listen on 0.0.0.0:50051")
	if err = s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
