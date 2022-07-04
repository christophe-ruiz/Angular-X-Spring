import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Message} from "../models/message";
import {Store} from "@ngrx/store";
import {getAllMessages} from "../actions/messages.actions";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private url : string = "https://io-labs.fr/messenger/messages.json";

  constructor(private http: HttpClient, private store: Store) {
    this.http.get<Message[]>("https://io-labs.fr/messenger/messages.json").subscribe((messages: Message[]) => {
      store.dispatch(getAllMessages({messages: messages}));
    })
  }
}
