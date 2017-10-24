class Admin::UsersController < ApplicationController
  before_action :require_admin

  def index
    @users = User.all
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy

    redirect_to admin_users_path
  end

  def require_admin
    unless current_user.admin == true
      redirect_to root_path
    end
  end
end
