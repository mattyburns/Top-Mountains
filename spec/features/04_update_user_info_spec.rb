require 'spec_helper'
require 'rails_helper'

feature 'edit user information' , %{
  As an authenticated user
  I want to update my information
  So that I can keep my profile up to date
} do

  before :each do
    skibuddy = User.create(username: "skibud22", email: "skibuddy@aol.com", password: "isuredoloveskiing")
    login_as(skibuddy, :scope => :user)
  end

  scenario 'logged-in user edits information' do
    skibuddy = User.first
    visit user_path(skibuddy)
    click_link "Edit Profile"

    fill_in 'Username', with: 'gondola'
    fill_in 'Email', with: 'gondola@slopeornope.com'
    fill_in 'Password', with: 'password'
    fill_in 'Confirm Password', with: 'password'
    fill_in 'Current Password', with: 'isuredoloveskiing'

    click_button "Update"

    expect(page).to have_content("Your account has been updated successfully.")
    expect(page).to have_content("Profile Page")
    expect(page).to have_content("gondola")
    expect(page).to have_content("gondola@slopeornope.com")
  end
end
