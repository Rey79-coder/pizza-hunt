const dateFormat = require('../utils/dateFormat');

const { Schema, model } = require('mongoose');
// TO IMPORT THE PKGS FOR THE PROJECT.


// SCHEMA for this model NO TABLES, YES COLLECTIONS
const PizzaSchema = new Schema(
  {
    pizzaName: {
      type: String,
      required: true,
      trim: true
    },
    createdBy: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal)
// getter in Mongoose, we just need to add the key get. 
//IT will transform the data before it gets to the controller //

    },
    size: {
      type: String,
      required: true,
      enum: ['Personal', 'Small', 'Medium', 'Large', 'Extra Large'],
      default: 'Large'
    },
    toppings: [],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// get total count of comments and replies on retrieval
PizzaSchema.virtual('commentCount').get(function() {
  return this.comments
  .reduce((total, comment) => total + comment.replies.length + 1, 0);
});


// export the Pizza model
module.exports = Pizza;