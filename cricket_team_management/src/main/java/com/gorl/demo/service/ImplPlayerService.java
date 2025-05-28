package com.gorl.demo.service;
import java.util.List;

import com.gorl.demo.entity.Player;

public interface ImplPlayerService {

    List<Player> getAllPlayers();

    Player getPlayerById(int id);

    Player addPlayer(Player player);

    Player updatePlayer(int id, Player newPlayer);

    void deletePlayer(int id);

    boolean existsById(int playerId);
}
