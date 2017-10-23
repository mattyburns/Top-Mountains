class MountainsController < ApplicationController

  def index
    @mountains = Mountain.all
  end


  def show
  end

end
