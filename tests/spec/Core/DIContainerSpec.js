describe( "Class 'Bomberman.DIContainer'", function () {

    describe( "when getting a service", function () {

        var container = new BombermanGame.DIContainer(),
            service   = function() { return new function() { this.test = 0 }};


        container.set( "myService", service, false );
        container.set( "mySharedService", service, true );


        it( "should return a new instance if it's not shared", function() {
            var serviceOne = container.get( "myService" ),
                serviceTwo = container.get( "myService" );

            // modifying the first returned instance
            serviceOne.test = 123;

            // both instances should be different
            expect( serviceOne.test ).toEqual( 123 );
            expect( serviceTwo.test ).toEqual( 0 );
        });

        it( "should return the same instance on consecutive calls if it's shared", function() {
            var serviceOne = container.get( "mySharedService" ),
                serviceTwo;

            // modifying the first instance
            serviceOne.test = 123;

            // requesting the service a second time
            serviceTwo = container.get( "mySharedService" );

            expect( serviceTwo ).toBe( serviceOne );
        });

        it( "should throw exception if service is not set", function () {
            expect( function() { container.get( "nonExisting" ) }).toThrow( "Service \"nonExisting\" doesn't exist" );
        });

    });

    describe( "loading services from other object", function() {

        var container = new BombermanGame.DIContainer(),
            services  = {
                "serviceOne" : function() {
                    return new function() { this.test = 1; };
                },
                "serviceTwo" : function() {
                    return new function() { this.test = 2; };
                }
            };

        it( "should add the services from given object to the DIContainer object", function() {
            container.load( services );

            var serviceOne = container.get( "serviceOne" ),
                serviceTwo = container.get( "serviceTwo" );

            expect( serviceOne ).toEqual( services.serviceOne() );
            expect( serviceTwo ).toEqual( services.serviceTwo() );
        });

    });

});