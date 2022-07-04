import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {messagesFeatureKey, messagesInitialState} from "../reducers/messages.reducer";

@NgModule({
  imports: [
    StoreModule.forFeature(messagesFeatureKey, messagesInitialState)
  ],
})
export class MessagesModule {}
