class Api::V1::ReviewsController < ApplicationController

  def create
    review = JSON.parse(request.body.read)
    new_review = Review.create(
      rating: review["rating"],
      skiing_review: review["skiing_review"],
      food_review: review["food_review"],
      lodging_review: review["lodging_review"],
      user_id: review["user_id"],
      mountain_id: review["mountain_id"]
    )
    render json: new_review
  end

end
