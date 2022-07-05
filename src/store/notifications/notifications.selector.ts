import {AppState} from "../store";
import {createSelector} from "@ngrx/store";
import {Notification} from "../../models/notification";


export const selectNotificationsState = (state: AppState) => state.notifications;

export const selectAllNotifications = createSelector(
  selectNotificationsState,
  (notifications: Notification[]) => notifications
)
