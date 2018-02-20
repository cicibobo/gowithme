/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {
  adapter: 'mongo',
  attributes: {
    provider: 'STRING',
    uid: {
      type: 'STRING',
      primaryKey: true,
      required: true
    },
    name: 'STRING',
    email: 'STRING',
    firstname: 'STRING',
    lastname: 'STRING',
    trips: {
      collection: 'trip',
      via: 'tripLeader'
    }
  }
};

