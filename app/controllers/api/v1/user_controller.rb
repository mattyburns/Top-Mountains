class Api::V1::UserController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def is_signed_in?
    if user_signed_in?
      render :json => {"signed_in" => true, "user" => current_user}
    else
      render :json => {"signed_in" => false}
    end
  end
end
