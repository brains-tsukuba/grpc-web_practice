<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br />
    <button @click="ping()">ping</button>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

import { GreeterClient } from "./proto/EchoServiceClientPb";
import { HelloRequest, HelloReply } from "./proto/echo_pb";

@Component({})
export default class App extends Vue {
  message: any = ""
  client: GreeterClient;
  constructor() {
    super();
    this.client = new GreeterClient(`http://${window.location.hostname}/grpc`)
  }

  sayHello(): Promise<object> {
    return new Promise((resolve, reject) => {
      let req = new HelloRequest();
      req.setName("You")
      this.client.sayHello(req, null, (err, response: HelloReply) => {
        console.log(`response ${response.toObject().message}`);
        return response.toObject().message
        if (err) {
          return reject(err);
        }
        resolve(response.toObject());
      })
    });
  }

  ping() {
    this.message = this.sayHello()
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
