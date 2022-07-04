import {createReducer, on, State} from "@ngrx/store";
import {getAllMessages} from "../actions/messages.actions";

export const messagesFeatureKey = 'messages';
export const messagesInitialState = []
export const messagesReducer = createReducer(
  messagesInitialState,
  on(getAllMessages, (state: State<any>, {messages}) => state.messages = messages)
)

