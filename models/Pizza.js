const { Schema, model } = require('mongoose');
// TO IMPORT THE PKGS FOR THE PROJECT.


// SCHEMA for this model NO TABLES, YES COLLECTIONS
const PizzaSchema = new Schema(
  {
    pizzaName: {
      type: String
    },
    createdBy: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    size: {
      type: String,
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
    },
    id: false
  }
);

// create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);


// get total count of comments and replies on retrieval
PizzaSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

// export the Pizza model
module.exports = Pizza;