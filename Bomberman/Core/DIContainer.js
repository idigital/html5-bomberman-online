/**
 * Dependency-injection container
 */
BombermanGame.DIContainer = Class.create({

    /**
     * List of defined services
     */
    services : null,

    /**
     * List of shared instances
     */
    sharedInstances : null,

    /**
     * Constructor
     */
    initialize : function()
    {
        this.services = {};
        this.sharedInstances = {};
    },

    /**
     * Sets the service by assigning it to the given name
     *
     * @param {String}   serviceName desired service name
     * @param {Function} definition  service definition
     * @param {Boolean}  shared      is the service shared (default - false)
     *
     * @return {DIContainer}
     *
     */
    set : function( serviceName, definition, shared )
    {
        if ( shared === true ) {
            this.sharedInstances[serviceName] = true;
        }

        this.services[serviceName] = definition;

        return this;
    },

    /**
     * Returns the Object created by the requested service
     * If the service was set as SHARED then
     *
     * @param {String} serviceName name of the service to call
     *
     * @return {Object}
     */
    get : function( serviceName )
    {
        var result = null;
        if ( this.sharedInstances[serviceName] ) {
            result = this._getSharedService( serviceName );
        } else {
            result = this._getService( serviceName );
        }

        return result;
    },

    /**
     * Removes the services from the container
     *
     * @param {String} serviceName name of the service to remove
     */
    remove : function( serviceName )
    {
        if ( this.services[serviceName] ) {
            delete this.services[serviceName];
            if ( this.sharedInstances[serviceName] ) {
                delete this.sharedInstances[serviceName];
            }
        }
    },

    /**
     * Loads the services from another object
     *
     * @param {Object} services
     */
    load : function( services )
    {
        this._loadGeneral( services );
        this._loadShared( services );
    },

    /**
     * Loads general services from the given object
     * If no "general" object was found or it's empty - no services are set
     *
     * @param {Object} services
     *
     * @private
     */
    _loadGeneral : function( services )
    {
        if ( services.general ) {
            for ( var serviceName in services.general ) {
                this.set( serviceName, services.general[serviceName], false );
            }
        }
    },

    /**
     * Loads shared services from the given object
     * If no "shared" object was found or it's empty - no services are set
     *
     * @param {Object} services
     *
     * @private
     */
    _loadShared : function( services )
    {
        if ( services.shared ) {
            for ( var serviceName in services.shared ) {
                this.set( serviceName, services.shared[serviceName], true );
            }
        }
    },

    /**
     * Returns the a new service instance
     *
     * @param {String} serviceName
     *
     * @throw {Exception} on failure to get the service throws an exception
     * @return {Object}
     *
     * @private
     */
    _getService : function( serviceName )
    {
        if ( this.services[serviceName] ) {
            return this.services[serviceName]();
        } else {
            throw new Error( "Service \"" + serviceName + "\" doesn't exist" );
        }
    },

    /**
     * Returns the shared service instance
     * If an instance is not created yet, then creates it
     *
     * @param {String} serviceName
     *
     * @return {Object}
     * @private
     */
    _getSharedService : function( serviceName )
    {
        if ( this.sharedInstances[serviceName] === true ) {
            this.sharedInstances[serviceName] = this.services[serviceName]();
        }

        return this.sharedInstances[serviceName];
    }

});