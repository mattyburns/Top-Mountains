require 'spec_helper'
require 'rails_helper'

feature 'sign in' , %{
  As an unauthenticated user
  I want to sign in
  So that I can post items and review them
} do

  before :each do
    skibuddy = User.create(username: "skibud22", email: "skibuddy@aol.com", password: "isuredoloveskiing")
  end

  scenario 'specifying valid and required information' do
    visit root_path

    click_link 'Sign In'
    fill_in 'Email', with: 'skibuddy@aol.com'
    fill_in 'Password', with: 'isuredoloveskiing'
    click_button 'Log In'
    expect(page).to have_content("Signed in successfully.")
    expect(page).to have_content("Sign Out")
    expect(page).to have_content("Mountains")
  end

  scenario 'user does not provide valid log in credentials' do
    visit root_path

    click_link 'Sign In'
    fill_in 'Email', with: 'skibuddy@aol.com'
    fill_in 'Password', with: 'skiingistheworst'
    click_button 'Log In'
    expect(page).to have_content("Invalid Email or password.")
    expect(page).to have_content("Log in")
  end

end
