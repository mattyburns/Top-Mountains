class Api::V1::ReviewsController < ApplicationController

  def create
    review = JSON.parse(request.body.read)
    new_review = Review.create(
      rating: review["rating"],
      skiing_review: review["skiingReview"],
      food_review: review["foodReview"],
      lodging_review: review["lodgingReview"],
      user_id: review["userId"],
      mountain_id: review["mountainId"]
    )
    render json: new_review
  end

end
