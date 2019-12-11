import { Injectable } from '@angular/core';
// import { Socket } from "phoenix";


@Injectable({
  providedIn: 'root'
})
export class WebsocketApiService {
  constructor(){
    // Open Socket connection
    // const socket = new Socket("ws://machinestream.herokuapp.com/api/v1/events");
    // socket.connect();

    // // Join correct channel and log events
    // const channel = socket.channel("events", {});
    // channel.join();
    // channel.on("new", event => console.log(event));
  }
}
