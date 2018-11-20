import { Component, OnInit, Input } from '@angular/core';
import { MessageOptions } from '../types/message-options';
import { ChatMessage } from '../types/chat-message';
import { DinerService } from '../service/diner.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-chat-message-form',
  templateUrl: './chat-message-form.component.html',
  styleUrls: ['./chat-message-form.component.css']
})
export class ChatMessageFormComponent implements OnInit {

  @Input("options")
  public options: MessageOptions[];

  @Input('chatMessages')
  public chatMessages: ChatMessage[];

  @Input('error')
  public error:string;

  constructor(private dinerService: DinerService) { }

  ngOnInit() {

  }

  // send questions and get options.
  public sendOptions(option: MessageOptions) {
    let msg: ChatMessage = new ChatMessage(option.eventid, option.option, []);
    msg.side = 'S';
    this.chatMessages.push(msg);

    this.dinerService.getResponse(option.eventid)
      .subscribe((data: ChatMessage) => {
        data.side = 'R';
        this.chatMessages.push(data);
        if (data.options.length === 1 && data.options[0].eventid == "END_CHAT") {
          this.options = null;
          this.logChatMessage();
        } else {
          this.options = data.options;
        }
        this.error = null;
      },(error:any)=>{
        this.error = " Error connecting to service. Please try again later";
        this.options = null;
      });
  }


  // log chat message
  public logChatMessage():void {
    let chatRecord:string = '';
    for(let i=0;i<this.chatMessages.length;i++){
        chatRecord += this.chatMessages[i].question;
        if(i != this.chatMessages.length-1)
            chatRecord += ' --> ';
    }
    this.dinerService.logChat(chatRecord);
  }

}
