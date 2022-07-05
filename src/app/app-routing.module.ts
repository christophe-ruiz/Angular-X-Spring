import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MessageListComponent} from "./message-list/message-list.component";
import {NotificationListComponent} from "./notification-list/notification-list.component";

const routes: Routes = [
  { path: '', redirectTo:'messages', pathMatch:'full'},
  { path: 'messages', component: MessageListComponent },
  { path: 'notifications', component: NotificationListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
