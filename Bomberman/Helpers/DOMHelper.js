/**
 * DOM helper for creating and manipulating game specific dom elements
 */
BombermanGame.DOMHelper = Class.create({

    DIC : null,

    /**
     * Initializes the DOMHelper class and passes the DIContainer instance to it
     *
     * @param {DIContainer} DIContainer
     */
    initialize : function( DIContainer )
    {
        this.DIC = DIContainer;
    },


    /**
     * Creates the required game display elements
     * (like GAME holder, CANVAS and GUI)
     *
     * @param {String} wrapperId ID of the DOM element that wraps the game elements
     * @param {int}    width     width of the game view
     * @param {int}    height    height of the game view
     */
    createInitialElements : function( wrapperId, width, height )
    {
        // creating required DOM elements
        var holder = document.createElement( "DIV" ),
            canvas = document.createElement( "CANVAS" ),
            gui    = document.createElement( "DIV" );

        holder.setAttribute( "id", BombermanGame.cfg.holderId );
        canvas.setAttribute( "id", BombermanGame.cfg.canvasId );
        gui.setAttribute( "id", BombermanGame.cfg.guiId );

        // resizing the game holder, canvas and gui elements
        holder.style.width  = width  + "px";
        holder.style.height = height + "px";

        gui.style.width  = width + "px";
        gui.style.height = height + "px";

        canvas.width  = width;
        canvas.height = height;

        // adding the new DOM elements to the wrapper element
        holder.appendChild( canvas );
        holder.appendChild( gui );
        document.getElementById( wrapperId ).appendChild( holder );
    }

});