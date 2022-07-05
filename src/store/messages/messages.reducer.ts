import {createReducer, on} from "@ngrx/store";
import {clickOnMessage, getAllMessages} from "./messages.actions";
import {Message} from "../../models/message";

export const messagesFeatureKey = 'messages';
export const messagesInitialState: Message[] = [];

export const messagesReducer = createReducer(
  messagesInitialState,
  on(getAllMessages, (state, {messages}) => messages),
  on(clickOnMessage, (state, message) => {
    const messageIndex = state.findIndex((m) => m.id === message.id)
    let messages = JSON.parse(JSON.stringify(state))
    messages[messageIndex].read = true;
    return messages;
  })
)

