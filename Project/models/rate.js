const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const rateSchema = new Schema(
  {
    user: {
         type: Schema.Types.ObjectId, ref:"User",

      },
    restaurant: {

        type: Schema.Types.ObjectId, ref:"Restaurant",

      },
   
    rate: {
      type: Number
    },

    review: {
        type: String,
      },
  
  },

  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Rate = model("Rate", rateSchema);

module.exports = Rate;