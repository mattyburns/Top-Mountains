class MountainsController < ApplicationController

  def index
    @mountains = Mountain.search(params[:search])
  end

  def show
    @mountain = Mountain.find(params[:mountain_id])
  end
end
