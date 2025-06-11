// src/app/player-list/player-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { Player } from '../models/player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];          // Stores ALL players fetched from the backend
  filteredPlayers: Player[] = [];  // Stores players AFTER filtering (this is what the table will display)

  // Properties to hold the values from the search inputs/dropdowns
  searchTeam: string = '';
  searchRole: string = '';

  // Example lists for dropdown options (adjust these to your actual player data)
  // In a real application, these might be fetched from an API or a shared constants file.
  teams: string[] = ['RCB', 'MI', 'SRH', 'CSK', 'DC', 'KKR', 'PBKS', 'RR', 'LSG', 'GT']; // Example IPL teams
  roles: string[] = ['Batsman', 'Bowler', 'All-Rounder', 'Wicketkeeper']; // Example Cricket roles

  constructor(
    private playerService: PlayersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadPlayers(); // Load all players when the component initializes
  }

  // Fetches all players from the service
  loadPlayers(): void {
    this.playerService.getAllPlayers().subscribe(
      (data: Player[]) => {
        this.players = data;        // Store all fetched players
        this.applyFilters();        // Apply filters immediately after loading (initially will show all)
        console.log('Fetched all players:', this.players); // For debugging: see what data was loaded
      },
      (error) => {
        console.error('Error fetching players:', error);
        alert('Could not load players. Please try again later.');
      }
    );
  }

  // Applies the current filters (searchTeam and searchRole) to the players list
  applyFilters(): void {
    this.filteredPlayers = this.players.filter(player => {
      // Filter by Team (case-insensitive)
      const matchesTeam = this.searchTeam
        ? player.teamName?.toUpperCase() === this.searchTeam.toUpperCase()
        : true; // If searchTeam is empty, always match

      // Filter by Role (case-insensitive, partial match for text input)
      const matchesRole = this.searchRole
        ? player.role?.toLowerCase().includes(this.searchRole.toLowerCase())
        : true; // If searchRole is empty, always match

      return matchesTeam && matchesRole; // Only show players that match both criteria
    });

    // For debugging: see the filtered results
    console.log('Filtered players:', this.filteredPlayers);
  }

  // Resets search criteria and reapplies filters to show all players
  clearFilters(): void {
    this.searchTeam = '';
    this.searchRole = '';
    this.applyFilters(); // Re-run filter to display all players
  }

  // Navigates to the player edit page
  editPlayer(id: number | undefined): void {
    if (id !== undefined) {
      this.router.navigate(['/players/edit', id]);
    } else {
      console.warn('Attempted to edit player with undefined ID.');
    }
  }

  // Navigates to the player detail page
  viewPlayerDetails(id: number | undefined): void {
    if (id !== undefined) {
      this.router.navigate(['/players', id]);
    } else {
      console.warn('Attempted to view details for player with undefined ID.');
    }
  }

  // Deletes a player and updates the list
  deletePlayer(id: number | undefined): void {
    if (id !== undefined) {
      if (confirm('Are you sure you want to delete this player?')) {
        this.playerService.deletePlayer(id).subscribe(
          () => {
            // Update the *original* players array by filtering out the deleted player
            this.players = this.players.filter(player => player.playerId !== id);
            this.applyFilters(); // Re-apply filters to update the UI after deletion
            alert('Player deleted successfully!');
          },
          (error) => {
            console.error('Error deleting player:', error);
            alert('Failed to delete player. Check console for details.');
          }
        );
      }
    } else {
      console.warn('Attempted to delete player with undefined ID.');
    }
  }
}