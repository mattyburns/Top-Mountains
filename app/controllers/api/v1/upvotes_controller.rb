class Api::V1::UpvotesController < ApplicationController
  skip_before_action :verify_autheticity_token

  def create
    upvote = JSON.parse(request.body.read)
    new_upvote = Upvote.create(
      user_id: upvote["userId"],
      review_id: upvote["reviewId"]
      vote: upvote["vote"]
    )

    render json: new_upvote
  end


end
