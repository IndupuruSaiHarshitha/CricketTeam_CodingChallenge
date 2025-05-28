package com.gorl.demo.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Player {
	@Id
	public int playerId;
	public String playerName;
	public int jerseyNumber;
	public String role;
	public int totalMatches;
	 @Column(name = "team_name")  
	    public String teamName;
	public String countryStateName;
	public String description;

 
    public int getPlayerId() { return playerId; }
    public void setPlayerId(int playerId) { this.playerId = playerId; }

    public String getPlayerName() { return playerName; }
    public void setPlayerName(String playerName) { this.playerName = playerName; }

    public int getJerseyNumber() { return jerseyNumber; }
    public void setJerseyNumber(int jerseyNumber) { this.jerseyNumber = jerseyNumber; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public int getTotalMatches() { return totalMatches; }
    public void setTotalMatches(int totalMatches) { this.totalMatches = totalMatches; }

    public String getTeamName() { return teamName; }
    public void setTeamName(String teamName) { this.teamName = teamName; }

    public String getCountryStateName() { return countryStateName; }
    public void setCountryStateName(String countryStateName) { this.countryStateName = countryStateName; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    @Override
    public String toString() {
        return "Player [playerId=" + playerId + ", playerName=" + playerName +
               ", jerseyNumber=" + jerseyNumber + ", role=" + role + ",teamName="+teamName+"]";
    }
}

