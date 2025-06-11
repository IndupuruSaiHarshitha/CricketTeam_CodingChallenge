import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // For making HTTP requests
import { FormsModule } from '@angular/forms';           // For ngModel (two-way data binding in forms)

import { AppRoutingModule } from './app-routing.module'; // <--- !!! IMPORTANT: Make sure this line is here !!!

import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerAddComponent } from './player-add/player-add.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerAddComponent,
    PlayerEditComponent,
    PlayerDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule // <--- !!! IMPORTANT: Make sure this is in the imports array !!!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }