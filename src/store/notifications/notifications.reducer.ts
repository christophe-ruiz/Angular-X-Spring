import {createReducer, on} from "@ngrx/store";
import {clickOnNotification, getAllNotifications} from "./notifications.actions";
import {Notification} from "../../models/notification";

export const notificationsFeatureKey = 'notifications';
export const notificationsInitialState: Notification[] = [];

export const notificationsReducer = createReducer(
  notificationsInitialState,
  on(getAllNotifications, (state, {notifications}) => {
    console.log('appel reducer all notif');
    return notifications
  }),
  on(clickOnNotification, (state, notification) => {
    const i = state.findIndex((notif) => notif.id === notification.id);
    let changedNotifs = JSON.parse(JSON.stringify(state));
    changedNotifs[i].read = true;
    return changedNotifs;
  })
)

