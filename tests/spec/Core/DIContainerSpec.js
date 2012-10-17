describe( "Class 'BombermanGame.DIContainer'", function () {

    describe( "method 'set'", function() {
        var container  = new BombermanGame.DIContainer(),
            serviceOne = function() { return function() { this.test = 1; } };

        container.set( 'serviceOne', serviceOne, true );

        it( "should add service to the container", function() {
            expect( container.services.serviceOne ).toEqual( serviceOne );
        });

        it( "should mark the service as shared in the container if 'shared' parameter is true", function() {
            expect( container.sharedInstances.serviceOne ).toBe( true );
        });

    });

    describe( "method 'get'", function () {
        var container = new BombermanGame.DIContainer();

        container.services = {
            myService       : function() { return new function() { this.test = 0 }},
            mySharedService : function() { return new function() { this.test = 1 }}
        };

        container.sharedInstances = {
            mySharedService : true
        };

        it( "should return a new instance if the service is not set as shared", function() {
            var serviceOne = container.get( "myService" ),
                serviceTwo = container.get( "myService" );

            // modifying the first returned instance
            serviceOne.test = 123;

            // both instances should be different
            expect( serviceOne.test ).toEqual( 123 );
            expect( serviceTwo.test ).toEqual( 0 );
        });

        it( "should on consecutive calls return the same instance if the service was set as shared", function() {
            var serviceOne = container.get( "mySharedService" ),
                serviceTwo;

            // modifying the first instance
            serviceOne.test = 123;

            // requesting the service a second time
            serviceTwo = container.get( "mySharedService" );

            expect( serviceTwo ).toBe( serviceOne );
        });

        it( "should throw exception if trying to get a non-existing service", function () {
            expect( function() { container.get( "nonExisting" ) }).toThrow( "Service \"nonExisting\" doesn't exist" );
        });

    });

    describe( "method 'load'", function() {
        var container = new BombermanGame.DIContainer(),
            services  = {
                general : {
                    "serviceOne" : function() {
                        return new function() { this.test = 1; };
                    },
                    "serviceTwo" : function() {
                        return new function() { this.test = 2; };
                    }
                },
                shared: {
                    "serviceThree" : function() {
                        return new function() { this.test = 3; };
                    }
                }
            };

        container.load( services );

        it( "should add the services from given object to the container", function() {
            var serviceOne   = container.get( "serviceOne" ),
                serviceTwo   = container.get( "serviceTwo" ),
                serviceThree = container.get( "serviceThree" );

            expect( serviceOne ).toEqual( services.general.serviceOne() );
            expect( serviceTwo ).toEqual( services.general.serviceTwo() );
            expect( serviceThree ).toEqual( services.shared.serviceThree() );
        });

    });

    describe( "method 'remove'", function() {
        var container = new BombermanGame.DIContainer();
        container.load({
            general : {
                "serviceOne" : function() {
                    return new function() { this.test = 1; };
                }
            },
            shared: {
                "serviceTwo" : function() {
                    return new function() { this.test = 3; };
                }
            }
        });

        // first call creates a shared instance
        container.get( "serviceTwo" );

        // removing both services
        container.remove( "serviceOne" );
        container.remove( "serviceTwo" );

        it( "should remove the service and its shared instance (if any) from the container", function() {
            // both services are gone and should throw exceptions
            expect( function() { container.get( "serviceOne" ); } ).toThrow();
            expect( function() { container.get( "serviceTwo" ); } ).toThrow();
        });

    });

});