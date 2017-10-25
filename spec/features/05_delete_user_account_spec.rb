require 'spec_helper'
require 'rails_helper'

feature 'delete user account' , %{
  As an authenticated user
  I want to delete my account
  So that my information is no longer retained by the app
} do

  before :each do
    skibuddy = User.create(username: "skibud22", email: "skibuddy@aol.com", password: "isuredoloveskiing")
    login_as(skibuddy, :scope => :user)
  end

  scenario 'logged-in user deletes their account' do
    skibuddy = User.first
    visit user_path(skibuddy)
    click_link "Edit Profile"
    click_button "Cancel my account"

    expect(page).to have_content("Bye! Your account has been successfully cancelled. We hope to see you again soon.")
    expect(page.html).to have_content("This is the main site")
    click_link "Sign In"
    fill_in 'Email', with: 'skibuddy@aol.com'
    fill_in 'Password', with: 'isuredoloveskiing'
    click_button 'Log In'

    expect(page).to have_content "Invalid Email or password."
  end
end
