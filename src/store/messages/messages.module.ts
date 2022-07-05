import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {messagesFeatureKey, messagesReducer} from "./messages.reducer";

@NgModule({
  imports: [
    StoreModule.forFeature(messagesFeatureKey, messagesReducer)
  ],
})
export class MessagesModule {}
