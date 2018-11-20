import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../types/chat-message';
import { DinerService } from '../service/diner.service';
import { MessageOptions } from '../types/message-options';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  @Input('chatMessages')
  public chatMessages: ChatMessage[];

  ngOnInit() {
  
  }
}
