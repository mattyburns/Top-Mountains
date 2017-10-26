class Api::V1::ReviewsController < ApplicationController

  def create
    review = JSON.parse(request.body.read)
    @new_review = Review.new(
      rating: review["rating"],
      skiing_review: review["skiingReview"],
      food_review: review["foodReview"],
      lodging_review: review["lodgingReview"],
      user_id: review["userId"],
      mountain_id: review["mountainId"]
    )

    if @new_review.save
      UserReviewedItemMailer.email_mountain_creator(@new_review)
      redirect_to mountain_path(review["mountainId"])
    end
    # UserReviewedItemMailer.email_mountain_creator(new_review)
    render json: @new_review
  end
end
