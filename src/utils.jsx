// src/utils.js
import { v4 as uuidv4 } from 'uuid';

// Function to create a unique Player ID
export function createPlayerId() {
  return uuidv4();
}

// Mock function to simulate a connection attempt
export function attemptConnection(playerId) {
  // Simulate a successful or failed connection (50% chance for each)
  return Math.random() > 0.5 ? 'success' : 'failure';
}
