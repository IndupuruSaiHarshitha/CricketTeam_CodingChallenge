package com.gorl.demo.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gorl.demo.entity.Player;
import com.gorl.demo.repository.PlayerRepository;

import java.util.List;
import java.util.Optional;
@Service
public class PlayerService {

	@Autowired
	public PlayerRepository playerRepository;
	public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    public Player getPlayerById(int id) {
        return playerRepository.findById(id).orElse(null);
    }

    public Player addPlayer(Player player) {
        return playerRepository.save(player);
    }
    public Player updatePlayer(int id, Player newPlayer) {
        Optional<Player> optionalPlayer = playerRepository.findById(id);

        if (optionalPlayer.isPresent()) {
            Player player = optionalPlayer.get();
            player.setPlayerName(newPlayer.getPlayerName());
            player.setJerseyNumber(newPlayer.getJerseyNumber());
            player.setRole(newPlayer.getRole());
            player.setTotalMatches(newPlayer.getTotalMatches());
            player.setTeamName(newPlayer.getTeamName());
            player.setCountryStateName(newPlayer.getCountryStateName());
            player.setDescription(newPlayer.getDescription());
            return playerRepository.save(player);
        }
        return null;
    }
    public void deletePlayer(int id) {
        playerRepository.deleteById(id);
    }
    public boolean existsById(int playerId) {
        return playerRepository.existsById(playerId);
    }

}
