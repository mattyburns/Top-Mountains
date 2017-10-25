class Api::V1::MountainsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    mountains = Mountain.all
    mountains_sorted_by_rating = mountains.sort_by{|mountain| mountain.rating}.reverse
    render json: mountains_sorted_by_rating
    # render :json => {"mountain" => mountains_sorted_by_rating}.to_json()
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
      image_url: mountain["imageUrl"],
      creator_id: mountain["creatorId"]
    )
    render :json => {"mountain" => new_mountain}.to_json()
  end

end