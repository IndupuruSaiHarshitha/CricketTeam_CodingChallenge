
import { Component } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { Player } from '../models/player';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent {
  playerList: Player[] = [];        //store players
  

  constructor(
    private playerService: PlayersService,
   
  ) { }

  ngOnInit(): void {
    this.getAllPlayers(); 
  }

  getAllPlayers(): void {
    this.playerService.getAllPlayers().subscribe(
                                 (list)=>{ this.playerList = list;  console.log(list)}
                                
                                  );
  }

  

  // Deletes  player 
  deletePlayer(id: number ): void {
     this.playerService.deletePlayer(id).subscribe( (msg)=>{ console.log("Deleted "+msg);});

      
        this.getAllPlayers(); // to refresh list again
}
}