class Api::V1::MountainsController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Mountain.by_rating
  end

  def show
    mountain = Mountain.find(params[:id])
    render :json => {"mountain" => mountain, "reviews" => mountain.reviews}
  end

  def create
      mountain = JSON.parse(request.body.read)
      new_mountain = Mountain.create(
        name: mountain["name"],
        address: mountain["address"],
        city: mountain["city"],
        state: mountain["state"],
        zip: mountain["zip"],
        image_url: mountain["image_url"],
        creator_id: mountain["creator_id"]
      )
      render json: new_mountain
  end

  def show
    mountain = Mountain.find(params[:id])
    # render :json => {"mountain" => mountain, "reviews" => mountain.reviews, serializer: ReviewSerializer}
    render json: mountain
  end

  def destroy
    mountain = Mountain.find(params[:id])
    mountain.destroy
    render json: Mountain.by_rating
  end
end
