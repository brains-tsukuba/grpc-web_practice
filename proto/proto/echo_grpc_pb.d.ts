// package: main
// file: proto/echo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_echo_pb from "../proto/echo_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
}

interface IGreeterService_ISayHello extends grpc.MethodDefinition<proto_echo_pb.HelloRequest, proto_echo_pb.HelloReply> {
    path: string; // "/main.Greeter/SayHello"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<proto_echo_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<proto_echo_pb.HelloRequest>;
    responseSerialize: grpc.serialize<proto_echo_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<proto_echo_pb.HelloReply>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer {
    sayHello: grpc.handleUnaryCall<proto_echo_pb.HelloRequest, proto_echo_pb.HelloReply>;
}

export interface IGreeterClient {
    sayHello(request: proto_echo_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: proto_echo_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: proto_echo_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_echo_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: proto_echo_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_echo_pb.HelloReply) => void): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: proto_echo_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: proto_echo_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: proto_echo_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_echo_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: proto_echo_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_echo_pb.HelloReply) => void): grpc.ClientUnaryCall;
}
