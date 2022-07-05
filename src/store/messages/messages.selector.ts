import {createSelector} from "@ngrx/store";
import {Message} from "../../models/message";
import {AppState} from "../store";

export const selectMessagesState = (state: AppState) => state.messages;

export const selectAllMessages = createSelector(
  selectMessagesState,
  (messages: Message[]) => messages
);
