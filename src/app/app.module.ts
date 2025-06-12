import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // For making HTTP requests
import { FormsModule } from '@angular/forms';           // For ngModel (two-way data binding in forms)

import { AppRoutingModule } from './app-routing.module'; 

import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerAddComponent } from './player-add/player-add.component';
import { SearchComponent } from './search/search.component';
import { MainpageComponent } from './mainpage/mainpage.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerAddComponent,
    SearchComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }