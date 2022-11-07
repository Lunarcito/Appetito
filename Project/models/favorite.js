const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const favoriteSchema = new Schema(
  {
    user: {
        type: {type: Schema.Types.ObjectId, ref:"User"},

      },

    restaurant: {
        type: [{type: Schema.Types.ObjectId, ref:"Restaurant"}]
      },
    
  },

  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Favorite = model("Favorite", favoriteSchema);

module.exports = Favorite;