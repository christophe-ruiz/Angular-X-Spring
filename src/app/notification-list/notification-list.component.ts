import { Component, OnInit } from '@angular/core';
import {NotificationsService} from "../../services/notifications.service";
import {AppState} from "../../store/store";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {getAllNotifications} from "../../store/notifications/notifications.actions";
import {Notification} from "../../models/notification";
import {selectAllNotifications} from "../../store/notifications/notifications.selector";

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

  public notifications$: Observable<Notification[]>;

  constructor(
    private notificationsService: NotificationsService,
    private store: Store<AppState>
  ) {
    this.notifications$ = this.store.pipe(select(selectAllNotifications));
  }

  ngOnInit(): void {
  }

}
