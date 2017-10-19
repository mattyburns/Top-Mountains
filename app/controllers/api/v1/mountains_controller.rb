class Api::V1::MountainsController < ApplicationController
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
    
    # @mountain.regions = Region.where(id: params[:mountains][:regions])
  end
end
