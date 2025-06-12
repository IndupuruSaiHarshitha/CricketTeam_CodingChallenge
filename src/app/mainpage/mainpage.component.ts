import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { PlayersService } from 'src/app/services/players.service';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
   teamName:string = '';
   players: Player[] = [];
    constructor(private router:Router,
      private route: ActivatedRoute,
    private playersService: PlayersService
    ){}
   
      searchPlayer(){
    if (this.teamName.trim()) {
      
          this.router.navigate(['/search', this.teamName]); // Optional: to go to a new route
        
  }
}
}
