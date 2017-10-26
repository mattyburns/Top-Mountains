class Api::V1::UpvotesController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless: -> { request.format.json? }

  def create
    input = JSON.parse(request.body.read)
    user = User.find(input["userId"])
    review = Review.find(input["reviewId"])
    vote_value = input["vote"].to_i
    vote = user.upvotes.find_by(review: review)
    review.vote_total
    if vote #if there is already an upvote
      new_vote = vote.vote + vote_value
      vote.update(vote: new_vote)
    else #if there is no upvote
      new_vote = Upvote.create(
        user: user,
        review: review,
        vote: vote_value
      )
    end
    render json: review.mountain.reviews
  end
end
