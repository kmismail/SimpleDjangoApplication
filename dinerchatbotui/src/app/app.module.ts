import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { ChatMessageItemComponent } from './chat-message-item/chat-message-item.component';
import { ChatMessageFormComponent } from './chat-message-form/chat-message-form.component';
import { DinerService } from './service/diner.service';

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    ChatMessageItemComponent,
    ChatMessageFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DinerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
