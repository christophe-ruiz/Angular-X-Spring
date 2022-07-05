import {createReducer} from "@ngrx/store";

export const notificationsFeatureKey = 'notifications';
export const notificationsInitialState = []
export const notificationsReducer = createReducer(
  notificationsInitialState,
)

