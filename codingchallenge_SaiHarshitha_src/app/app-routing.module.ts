import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerAddComponent } from './player-add/player-add.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' }, // Default route to player list
  { path: 'players', component: PlayerListComponent },
  { path: 'players/add', component: PlayerAddComponent },
  // ALWAYS place more specific routes before more general ones
  { path: 'players/edit/:id', component: PlayerEditComponent }, // More specific
  { path: 'players/:id', component: PlayerDetailComponent },    // More general
  { path: '**', redirectTo: '/players' } // Wildcard route for any unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }