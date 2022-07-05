import {Message} from "../models/message";
import {Notification} from "../models/notification";

export interface AppState {
  messages: Message[],
  notifications: Notification[]
}
