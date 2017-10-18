class ReviewsController < ApplicationController

  def new
    @review = Review.new
    @mountain = Mountain.find(params[:mountain_id])
  end

  def create
    @review = Review.new(review_params)
    @mountain = Mountain.find(params[:mountain_id])
    @review.user_id = current_user.id
    @review.mountain = @mountain
    if @review.save
      flash[:notice] = "Review was added successfully!"
      redirect_to @mountain
    else
      flash[:notice] = "We were unable to save your review."
      redirect_to @mountain
    end
  end

  def edit
    @review = Review.find(params[:id])
  end

  def update
    @review = Review.find(params[:id])
  end

  def destroy
    @review = Review.find(params[:id])
    @mountain = Mountain.find(params[:mountain_id])
    @review.destroy
  end

  private

  def review_params
    params.require(:review).permit(:rating, :skiing_review, :food_review, :lodging_review)
  end
end
