class Api::V1::ReviewsController < ApplicationController

  def create
    review = JSON.parse(request.body.read)
    @new_review = Review.new(
      rating: review["rating"],
      skiing_review: review["skiing_review"],
      food_review: review["food_review"],
      lodging_review: review["lodging_review"],
      user_id: review["user_id"],
      mountain_id: review["mountain_id"]
    )

    if @new_review.save
      UserReviewedItemMailer.email_mountain_creator(@new_review)
      render json: @new_review
    else
      render json: {error: "Sorry, this did not work!"}
    end
  end
end
