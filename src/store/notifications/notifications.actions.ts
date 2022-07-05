import {createAction, props} from "@ngrx/store";
import {Notification} from "../../models/notification";


export const getAllNotifications = createAction(
  '[Notifications] Get all notifications',
  props<{ notifications: Notification[]}>()
);

export const clickOnNotification = createAction(
  '[Notifications] Clicked on a notification',
  props<Notification>()
)
