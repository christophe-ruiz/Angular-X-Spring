import { Component, OnInit } from '@angular/core';
import {MessagesService} from "../../services/messages.service";
import {Message} from "../../models/message";
import {select, Store} from "@ngrx/store";
import {selectAllMessages} from "../../store/messages/messages.selector";
import {Observable} from "rxjs";
import {AppState} from "../../store/store";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  public messages$: Observable<Message[]>;

  constructor(
    private messagesService: MessagesService,
    private store: Store<AppState>
  ) {
    this.messages$ = this.store.pipe(select(selectAllMessages))
  }

  ngOnInit(): void {
  }

}
