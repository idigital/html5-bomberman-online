/**
 * Game settings and namespace declaration
 */

// creating a namespace for the game
BombermanGame = { cfg : {}};

// defining configurations
BombermanGame.cfg.holderId = "gameHolder"; // game holder element ID
BombermanGame.cfg.canvasId = "gameCanvas"; // game canvas element ID
BombermanGame.cfg.guiId    = "gameGui";    // game gui element ID

BombermanGame.cfg.TPS         = 30; // ticks per second
BombermanGame.cfg.TICK_LENGTH = (1000 / BombermanGame.cfg.TPS) | 0; // ms