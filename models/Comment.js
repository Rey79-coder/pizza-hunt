const dateFormat = require('../utils/dateFormat');

const { Schema, model, Types } = require('mongoose');

const ReplySchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment's _id field
    replyId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    replyBody: {
      type: String
    },
    writtenBy: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const CommentSchema = new Schema({
  writtenBy: {
    type: String
  },
  commentBody: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
  },

  // use ReplySchema to validate data for a reply
  replies: [ReplySchema]
},
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);


const Comment = model('Comment', CommentSchema);

// get total count of comments and replies on retrieval
CommentSchema.virtual('replyCount').get(function() {
  return this.replies.length;
});

module.exports = Comment;