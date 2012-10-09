(function( window ) {
    /**
     * Main game class that handles all the request and starts required controllers
     */
    Bomberman.Game = Class.create({
        _currentController : null, // current controller ID

        /**
         * Constructor
         * Initiates the required game display elements like GAME element holder, CANVAS and GUI
         * 
         * @param {String} wrapper ID of the DOM element that wraps the game elements
         * @param {int}    width  width of the game view
         * @param {int}    height height of the game view
         */
        initialize : function( wrapper, width, height )
        {
            // creating required DOM elements
            var holder = document.createElement( "DIV" ),
                canvas = document.createElement( "CANVAS" ),
                gui    = document.createElement( "DIV" );

            holder.setAttribute( "id", Bomberman.cfg.holderId );
            canvas.setAttribute( "id", Bomberman.cfg.canvasId );
            gui.setAttribute( "id", Bomberman.cfg.guiId );

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
            document.getElementById( wrapper ).appendChild( holder );
        },

        /**
         * Starts the game
         */
        start : function()
        {

        }
    })
})( window )