class Api::V1::MountainsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    mountain = JSON.parse(request.body.read)
    new_mountain = Mountain.create(
      name: mountain["name"],
      address: mountain["address"],
      city: mountain["city"],
      state: mountain["state"],
      zip: mountain["zip"],
      image_url: mountain["imageUrl"],
      creator_id: current_user.id
    )

    render json: new_mountain
    # @mountain.regions = Region.where(id: params[:mountains][:regions])
  end
end
