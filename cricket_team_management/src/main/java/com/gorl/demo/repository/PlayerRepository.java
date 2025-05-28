package com.gorl.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gorl.demo.entity.Player;

public interface PlayerRepository extends JpaRepository<Player, Integer> {

}
