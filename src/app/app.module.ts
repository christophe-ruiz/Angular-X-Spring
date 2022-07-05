import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageComponent } from './message/message.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import {MessagesModule} from "../store/messages/messages.module";
import {NotificationsModule} from "../store/notifications/notifications.module";
import {messagesReducer} from "../store/messages/messages.reducer";
import {notificationsReducer} from "../store/notifications/notifications.reducer";
import {StoreModule} from "@ngrx/store";
import { NotificationComponent } from './notification/notification.component';
import { NotificationListComponent } from './notification-list/notification-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MessageListComponent,
    MessageComponent,
    HeaderComponent,
    NotificationComponent,
    NotificationListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    }),
    MessagesModule,
    NotificationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
