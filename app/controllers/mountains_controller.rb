class MountainsController < ApplicationController

  def index
    # @mountains = Mountain.where("name ILIKE ?", params[:search])
    @search = params[:search]
    @mountains = Mountain.search(@search)
    # if !@mountains
    #   # redirect_to root_path
    # end
  end
end
