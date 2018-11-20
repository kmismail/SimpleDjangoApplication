import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../types/chat-message';

@Component({
  selector: 'app-chat-message-item',
  templateUrl: './chat-message-item.component.html',
  styleUrls: ['./chat-message-item.component.css']
})
export class ChatMessageItemComponent implements OnInit {
  
  @Input('message')
  public chatMessage: ChatMessage;

  constructor() { }

  ngOnInit() {

  }

}
