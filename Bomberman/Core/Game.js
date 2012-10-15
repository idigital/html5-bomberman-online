/**
 * Main game class that handles all the request and starts required controllers
 */
BombermanGame.Game = Class.create({

    DIC : null,

    /**
     * Constructor
     * Assigns the DIContainer
     *
     * @param {DIContainer} DIContainer
     */
    initialize : function( DIContainer )
    {
        this.DIC = DIContainer;
    },

    /**
     * Initiates the required game display elements like GAME element holder, CANVAS and GUI
     *
     * @param {String} wrapper ID of the DOM element that wraps the game elements
     * @param {int}    width  width of the game view
     * @param {int}    height height of the game view
     */
    init : function( wrapper, width, height )
    {
        this.DIC.get( "DOMHelper" ).createInitialElements( wrapper, width, height );
    }

});
