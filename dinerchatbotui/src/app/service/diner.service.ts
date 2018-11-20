import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatMessage } from '../types/chat-message';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DinerService {

  private baseURL: string = "http://localhost:8000/dinerservice/";

  constructor(private http: HttpClient) { }

  public getResponse(eventid: string) :Observable<ChatMessage> {
    return this.http.get<ChatMessage>(this.baseURL +"getjson/"+ eventid);    
  }

  public logChat(chatRecord: string): void {
    this.http.post<string>(this.baseURL+"logchat",chatRecord,httpOptions).subscribe();
  }

}
