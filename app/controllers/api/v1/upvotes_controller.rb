class Api::V1::UpvotesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    vote = JSON.parse(request.body.read)
    new_vote = Upvote.create(
      user_id: vote["userId"],
      review_id: vote["reviewId"],
      vote: vote["vote"]
    )
    render json: new_vote
  end

  def update
    vote = Upvote.find(params["id"])
    new_vote = JSON.parse(request.body.read)
    vote.vote = new_vote["vote"]
    render json: vote
  end
end
