package com.gorl.demo.controller;

import com.gorl.demo.dto.PlayerDTO;
import com.gorl.demo.entity.Player;
import com.gorl.demo.service.PlayerService;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/players")
public class PlayerController {

    @Autowired
    private PlayerService playerService;

    @GetMapping
    public List<PlayerDTO> getAllPlayers() {
        List<Player> players = playerService.getAllPlayers();
        return players.stream()
                .map(player -> new PlayerDTO(
                        Integer.valueOf(player.getPlayerId()),    // explicit boxing
                        player.getPlayerName(),
                        Integer.valueOf(player.getJerseyNumber()), // explicit boxing
                        player.getRole(),
                        player.getTeamName()
                ))
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlayerDTO> getPlayerById(@PathVariable("id") int playerId) {
        Player player = playerService.getPlayerById(playerId);
        if (player != null) {
            PlayerDTO dto = new PlayerDTO(
                    Integer.valueOf(player.getPlayerId()),      // explicit boxing
                    player.getPlayerName(),
                    Integer.valueOf(player.getJerseyNumber()),  // explicit boxing
                    player.getRole(),
                    player.getTeamName()
            );
            return ResponseEntity.ok(dto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<?> addPlayer(@Valid @RequestBody PlayerDTO playerDTO, BindingResult result) {
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body(result.getAllErrors());
        }

        Player player = new Player();
        player.setPlayerName(playerDTO.getPlayerName());
        player.setJerseyNumber(playerDTO.getJerseyNumber());
        player.setRole(playerDTO.getRole());
        player.setTeamName(playerDTO.getTeamName());

        Player savedPlayer = playerService.addPlayer(player);
        return ResponseEntity.ok(savedPlayer);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updatePlayer(@PathVariable("id") int playerId,
                                          @Valid @RequestBody PlayerDTO playerDTO,
                                          BindingResult result) {
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body(result.getAllErrors());
        }

        Player playerDetails = new Player();
        playerDetails.setPlayerName(playerDTO.getPlayerName());
        playerDetails.setJerseyNumber(playerDTO.getJerseyNumber());
        playerDetails.setRole(playerDTO.getRole());
        playerDetails.setTeamName(playerDTO.getTeamName());

        Player updatedPlayer = playerService.updatePlayer(playerId, playerDetails);
        if (updatedPlayer != null) {
            return ResponseEntity.ok(updatedPlayer);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlayer(@PathVariable("id") int playerId) {
        if (!playerService.existsById(playerId)) {
            return ResponseEntity.notFound().build();
        }
        playerService.deletePlayer(playerId);
        return ResponseEntity.noContent().build();
    }
}
