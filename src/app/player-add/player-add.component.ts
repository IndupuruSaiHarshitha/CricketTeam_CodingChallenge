import { Component } from '@angular/core';
import { Player } from '../models/player';
import { PlayersService } from '../services/players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css']
})
export class PlayerAddComponent {

  constructor(private playerService: PlayersService, private router: Router) {}

  addPlayer(data: Player) {
    console.log("Form data submitted: ", data);
    this.playerService.addPlayer(data).subscribe(
      (player) => {
        console.log('Added Player is: ', player);
        alert('Player added successfully!');
        this.router.navigate(['/player-list']);
      },
      (error) => {
        console.error('Error while adding player:', error);
        alert('Failed to add player');
      }
    );
  }
}
