package com.gorl.demo.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.Pattern;

public class PlayerDTO {

    @NotNull(message = "Player ID cannot be null")
    @Min(value = 1, message = "Player ID must be greater than 0")
    private Integer playerId;

    @NotBlank(message = "Player name is mandatory")
    @Size(min = 2, max = 50, message = "Player name must be between 2 and 50 characters")
    private String playerName;

    @NotNull(message = "Jersey number cannot be null")
    @Min(value = 1, message = "Jersey number must be greater than 0")
    private Integer jerseyNumber;

    @NotBlank(message = "Role is mandatory")
    @Size(min = 2, max = 30, message = "Role must be between 2 and 30 characters")
    private String role;
    @NotBlank(message = "Team name is mandatory")
    @Pattern(regexp = "^(rcb|mi|srh|csk)$", message = "Team name must be one of: rcb, mi, srh, csk")
    private String teamName;

    public PlayerDTO() {
    }

    public PlayerDTO(Integer playerId, String playerName, Integer jerseyNumber, String role,String teamName) {
        this.playerId = playerId;
        this.playerName = playerName;
        this.jerseyNumber = jerseyNumber;
        this.role = role;
        this.teamName = teamName;
    }

    public Integer getPlayerId() {
        return playerId;
    }

    public void setPlayerId(Integer playerId) {
        this.playerId = playerId;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public Integer getJerseyNumber() {
        return jerseyNumber;
    }

    public void setJerseyNumber(Integer jerseyNumber) {
        this.jerseyNumber = jerseyNumber;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }
}
