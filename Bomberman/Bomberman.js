(function( window ) {
    var DIContainer = new BombermanGame.DIContainer();
    DIContainer.load( BombermanGame.DIContainerServices );
    window.Bomberman = new BombermanGame.Game( DIContainer );
}) ( window );