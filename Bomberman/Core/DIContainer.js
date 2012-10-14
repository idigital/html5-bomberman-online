/**
 * Dependency-injection container
 */
BombermanGame.DIContainer = Class.create({

    /**
     * List of defined services
     */
    _services : {},

    /**
     * List of shared instances
     */
    _sharedInstances : {},

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
            this._sharedInstances[serviceName] = true;
        }

        this._services[serviceName] = definition;

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
        if ( this._sharedInstances[serviceName] ) {
            result = this._getSharedService( serviceName );
        } else {
            result = this._getService( serviceName );
        }

        return result;
    },

    /**
     * Loads the services from another object
     *
     * @param {Object} services
     */
    load : function( services )
    {
        Object.extend( this._services, services );
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
        if ( this._services[serviceName] ) {
            return this._services[serviceName]();
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
        if ( this._sharedInstances[serviceName] === true ) {
            this._sharedInstances[serviceName] = this._services[serviceName]();
        }

        return this._sharedInstances[serviceName];
    }

});