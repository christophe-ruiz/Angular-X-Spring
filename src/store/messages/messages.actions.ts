import {createAction, props} from '@ngrx/store';
import {Message} from "../../models/message";

export const getAllMessages = createAction(
  '[Message] Get all messages',
  props<{ messages: Message[] }>()
);

export const clickOnMessage = createAction(
  '[Message] Click on message',
  props<Message>()
)
