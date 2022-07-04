import {createAction, props} from '@ngrx/store';
import {Message} from "../models/message";

export const getAllMessages = createAction(
  '[Data] Get all messages',
  props<{ messages: Message[] }>()
);
