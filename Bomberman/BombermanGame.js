/**
 * Game settings and namespace declaration
 */

// creating a namespace for the game
Bomberman = { cfg : {}};

// defining configurations
Bomberman.cfg.holderId = "gameHolder"; // game holder element ID
Bomberman.cfg.canvasId = "gameCanvas"; // game canvas element ID
Bomberman.cfg.guiId    = "gameGui";    // game gui element ID

Bomberman.cfg.TPS         = 30; // ticks per second
Bomberman.cfg.TICK_LENGTH = (1000 / Bomberman.cfg.TPS) | 0; // ms