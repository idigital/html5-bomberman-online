describe( "Class 'BombermanGame.DOMHelper'", function () {
    describe( "method 'createInitialElements'", function () {
        var width = 700, height = 500, wrapperId = "testWrapper", sut;

        beforeEach( function () {
            var wrapper = document.createElement( "DIV" );
            wrapper.setAttribute( "id", wrapperId );
            document.body.appendChild( wrapper );
            sut = new BombermanGame.DOMHelper( new BombermanGame.DIContainer() );
            sut.createInitialElements( wrapperId, width, height );
        } );

        afterEach( function () {
            document.body.removeChild( $( wrapperId ) );
            sut = null;
        } );

        it( "should create holder element inside the wrapper element", function () {
            expect( $$( "#" + wrapperId + " #gameHolder" ).length ).toEqual( 1 );
        } );

        it( "should create canvas element inside the holder element", function () {
            expect( $$( "#gameHolder #gameCanvas" ).length ).toEqual( 1 );
        } );

        it( "should create gui element inside the holder element", function () {
            expect( $$( "#gameHolder #gameGui" ).length ).toEqual( 1 );
        } );

        it( "all new elements should have the width and height that was passed to the method", function () {
            expect( $( "gameHolder" ).style.width ).toEqual( width + "px" );
            expect( $( "gameHolder" ).style.height ).toEqual( height + "px" );

            expect( $( "gameGui" ).style.width ).toEqual( width + "px" );
            expect( $( "gameGui" ).style.height ).toEqual( height + "px" );

            expect( $( "gameCanvas" ).width ).toEqual( width );
            expect( $( "gameCanvas" ).height ).toEqual( height );
        } );
    } );
} );