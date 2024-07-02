/**
 * Task.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    data:{
      type:'string',
      required:true,
    },
    done: {
      type: 'boolean',
      defaultsTo: false
    },
    userid:{
      model:'User',
      required:true,
    },
  },

};

