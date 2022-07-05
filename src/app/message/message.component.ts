import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../models/message";
import {AppState} from "../../store/store";
import {Store} from "@ngrx/store";
import {clickOnMessage} from "../../store/messages/messages.actions";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input()
  message! : Message;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
  }

  clickAction () {
    this.store.dispatch(clickOnMessage(this.message))
  }

}
