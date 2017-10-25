class MountainsController < ApplicationController

  def index
    @mountains = Mountain.search(params[:search])
  end


  def show
  end

end
