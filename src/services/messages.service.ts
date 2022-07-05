import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Message} from "../models/message";
import {Store} from "@ngrx/store";
import {getAllMessages} from "../store/messages/messages.actions";
import {AppState} from "../store/store";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private url : string = "https://io-labs.fr/messenger/messages.json";

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.http.get<Message[]>("https://io-labs.fr/messenger/messages.json").subscribe((messages: Message[]) => {
      store.dispatch(getAllMessages({messages: messages}));
    })
  }
}
