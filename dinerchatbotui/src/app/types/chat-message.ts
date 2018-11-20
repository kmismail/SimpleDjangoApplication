import { MessageOptions } from "./message-options";

export class ChatMessage {
    public eventid: string = '';
    public question: string = '';
    public options:  MessageOptions[] = [];
    public side:string = '';

    constructor(eventId:string ,question:string , options:MessageOptions[]){
        this.eventid = eventId;
        this.question = question;
        this.options = options;
    }
}
