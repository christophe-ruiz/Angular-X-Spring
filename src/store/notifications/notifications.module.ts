import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {
  notificationsFeatureKey,
  notificationsReducer,
} from "./notifications.reducer";

@NgModule({
  imports: [
    StoreModule.forFeature(notificationsFeatureKey, notificationsReducer)
  ],
})
export class NotificationsModule {}
