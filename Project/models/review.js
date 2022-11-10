const { Schema, model} = require('mongoose')


const reviewSchema = new Schema (
    {
      user: {
        type: Schema.Types.ObjectId, ref:"User",
     },
     
     restaurant: {
        type: Schema.Types.ObjectId, ref:"Restaurant",
      },

      review: {
        type: String
      }
    },

    {
        timestamps: true,
      }
)

const Review = model('Review', reviewSchema)

module.exports = Review