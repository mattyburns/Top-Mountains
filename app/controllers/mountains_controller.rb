class MountainsController < ApplicationController
# before_action :authorize_user, except: [:index, :show]
# before_action :authorize_admin, only: [:destroy]

  def index
    @mountains = Mountain.all
  end

  def show
    @mountain = Mountain.find(params[:id])
    @mountain_reviews = @mountain.reviews
    @review = Review.new
  end

  def new
    @mountain = Mountain.new
    @state_collection = Mountain::STATES
  end

  def create
    @mountain = Mountain.new(mountain_params)
    @state_collection = Mountain::STATES
    @mountain.creator_id = current_user.id
    # @mountain.regions = Region.where(id: params[:mountains][:regions])
    if @mountain.save
      flash[:notice] = "Mountain added successfully!"
      redirect_to @mountain
    else
      render :new
    end
  end

  def edit
    @mountain = Mountain.find(params[:id])
  end

  def update
    @mountain = Mountain.find(params[:id])
    if @mountain.update(mountain_params)
      redirect_to @mountain, notice: "Mountain was successfully updated."
    else
      render :edit
    end
  end

  def destroy
    @mountain = Mountain.find(params[:id])
    @mountain.destroy
    redirect_to mountains_url, notice: "Mountain was successfully removed."
  end

  private

  def mountain_params
    params.require(:mountain).permit(:name, :address, :city, :state, :zip, :image_url, :trail_count, :ticket_price, :rental_price)
  end

  # def authorize_user
  #   if !user_signed_in? || !current_user.admin?
  #     raise ActionController::RoutingError.new("You must be logged in to view this page.")
  #   end
  # end

#   def authorize_admin
#     if !current_user.admin?
#       raise ActionController::RoutingError.new("You must be an administrator to be able to do that.")
#     end
#   end
end
