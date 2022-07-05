import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {AppState} from "../store/store";
import {getAllNotifications} from "../store/notifications/notifications.actions";
import {Notification} from "../models/notification";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private url: string = "https://raw.githubusercontent.com/NablaT/test-api/master/assets/notifications"

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) {
    console.log('appel')
    this.http.get<Notification[]>(this.url).subscribe((notifications: Notification[]) => {
      this.store.dispatch(getAllNotifications({notifications: notifications}));
    })
  }
}
