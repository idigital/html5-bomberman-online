describe( "'Bomberman.Game' class", function() {
    describe( "on new instance initialisation", function() {
        var width = 700, height = 500, wrapperId = "testWrapper";
        beforeEach(function(){
             var wrapper = document.createElement( "DIV" );
             wrapper.setAttribute( "id", wrapperId );
             document.body.appendChild( wrapper );
        })
        afterEach(function(){
            document.body.removeChild( document.getElementById( wrapperId ) );
        })
        it( "should create holder element inside the wrapper element", function(){
            
        })
        it( "should create canvas element inside the holder element", function(){
            
        })
        it( "should create gui element inside the holder element", function(){

        })
        it( "all new elements should have the width of " + width + " and height of " + height, function() {

        })
    })
});