class UsersController < ApplicationController

  def show
    if !user_signed_in?
      redirect_to new_user_session_url
    else
      @user = current_user
    end
  end

end
