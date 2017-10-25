class ReviewsController < ApplicationController
  before_action :authenticate_user!

  def create
    @mountain = Mountain.find(params[:mountain_id])
    @review = @mountain.reviews.build(review_params)
    @review.user = current_user

    if @review.save
      UserReviewedItemMailer.new_review(@review)
      redirect_to mountain_path(@mountain)
    else
      render :mountain
    end
  end
end
