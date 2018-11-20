import { Component, Input } from '@angular/core';
import { DinerService } from './service/diner.service';
import { ChatMessage } from './types/chat-message';
import { MessageOptions } from './types/message-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dinerchatbotui';  
  
  public chatMessages : ChatMessage[] = new Array();

  public options: MessageOptions[] = new Array();

  public error:string = '';

  constructor(private dinerService: DinerService){  
      this.startChat();
  }

  // initial call to start chart
  public startChat(){
    this.dinerService.getResponse('START_CHAT')
      .subscribe((data: ChatMessage) => {
        // set side to differentiate color of sent 
        // and received messages
        data.side = "R";
        this.chatMessages.push(data);  
        this.options = data.options;    
      },(error:any)=>{
        this.error = " Error connecting to service. Please try again later";
        this.options = null;
      });
  }

}
