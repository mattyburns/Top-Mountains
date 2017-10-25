class ReviewsController < ApplicationController
  def create
    @mountain = Mountain.find(params[:mountain_id])
    @review = @mountain.reviews.build(params[review_params])
    @review.user = current_user

    if @review.save
      UserReviewedItemMailer.email_mountain_creator(@review)
      redirect_to mountain_path(@mountain)
    end
  end
end
