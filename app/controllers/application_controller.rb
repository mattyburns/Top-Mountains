class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> {request.format.json?}
  before_action :configure_permitted_parameters, if: :devise_controller?

 protected

 def configure_permitted_parameters
   devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :email, :password, :password_confirmation, :remember_me, :avatar, :avatar_cache])
   devise_parameter_sanitizer.permit(:account_update, keys: [:username, :password, :password_confirmation, :current_password, :avatar, :avatar_cache, :remove_avatar])
 end
end
