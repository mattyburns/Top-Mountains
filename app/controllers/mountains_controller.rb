class MountainsController < ApplicationController

  def index
    @mountains = Mountain.all
  end

end
