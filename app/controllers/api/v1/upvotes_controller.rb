class Api::V1::UpvotesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    input = JSON.parse(request.body.read)
    user = User.find(input["userId"])
    review = Review.find(input["reviewId"])
    vote_value = input["vote"].to_i
    vote = user.upvotes.find_by(review: review)
    
    if vote #if there is already an upvote
      vote.vote += vote_value
      render json: vote

    else #if there is no upvote
      new_vote = Upvote.create(
        user: user,
        review: review,
        vote: vote_value
      )
      render json: new_vote
    end
  end

  def update
  end
end
