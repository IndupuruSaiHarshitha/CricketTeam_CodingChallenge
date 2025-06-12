import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerAddComponent } from './player-add/player-add.component';
import { SearchComponent } from './search/search.component';
import { MainpageComponent } from './mainpage/mainpage.component';


const routes: Routes = [
  {path:'homepage',component:MainpageComponent},
    {path:'player-add',component:PlayerAddComponent},
    {path:'player-list',component:PlayerListComponent},
    {path:'search/:id',component:SearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }