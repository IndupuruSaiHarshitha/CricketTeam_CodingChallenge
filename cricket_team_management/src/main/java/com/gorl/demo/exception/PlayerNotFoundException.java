package com.gorl.demo.exception;

public class PlayerNotFoundException extends RuntimeException {
	public PlayerNotFoundException(String message) {
        super(message);
    }
}
