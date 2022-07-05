import {Component, Input, OnInit} from '@angular/core';
import {Notification} from "../../models/notification";
import {AppState} from "../../store/store";
import {Store} from "@ngrx/store";
import {clickOnNotification} from "../../store/notifications/notifications.actions";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input()
  notification!: Notification;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  clickAction(): void {
    this.store.dispatch(clickOnNotification(this.notification));
  }

}
