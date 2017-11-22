import { Message } from "./message.model";
import { Injectable } from "@angular/core";

// @Injectable()
export class MessageService {
    messages: Message[] = [];

    addMessage(message: Message) {
        this.messages.push(message);
        console.log(this.messages);
    }

    getMessages(){
        return this.messages;
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}