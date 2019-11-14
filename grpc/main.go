package main

import (
	"context"
	fmt "fmt"
	"log"
	"net"

	"google.golang.org/grpc"
)

type server struct{}

func (s *server) SayHello(ctx context.Context, in *HelloRequest) (*HelloResponse, error) {
	t := fmt.Sprintf("hello, %s", in.GetText())
	return &HelloResponse{Text: t}, nil
}

func main() {
	s := grpc.NewServer()
	lis, err := net.Listen("tcp", "0.0.0.0:50051")
	RegisterGreeterServer(s, &server{})
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
