import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/models/player';
import { PlayersService } from 'src/app/services/players.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  playerSearchList:Player[] =[];

    constructor(private route:ActivatedRoute, private playerService:PlayersService){}
 
    ngOnInit(): void {
     
      this.searchPlayer();
  }
   
     searchInput:string = '';

   searchPlayer() {
  this.route.params.subscribe((param) => {
    this.searchInput = param['id']; 
    const id = Number(this.searchInput);

    this.playerService.getPlayerById(id).subscribe({
      next: (player) => {
        this.playerSearchList = [player]; 
        console.log('Player found:', player);
      },
      error: (err) => {
        console.error('Player not found', err);
        this.playerSearchList = []; 
      }
    });
  });
}
}
