import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MessageListComponent} from "./message-list/message-list.component";

const routes: Routes = [
  { path: '', component: MessageListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }