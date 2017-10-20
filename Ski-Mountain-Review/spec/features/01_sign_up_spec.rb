require 'spec_helper'
require 'rails_helper'

feature 'sign up' , %{
  As a prospective user
  I want to create an account
  So that I can post items and review them
} do
  # ACCEPTANCE CRITERIA
  # * I must specify a valid email address
  # * I must specify a password, and confirm that password
  # * If I do not perform the above, I get an error message
  # * If I specify valid information, I register my account and

  scenario 'specifying valid and required information' do
    visit root_path
    click_link 'Sign Up'
    fill_in 'Username', with: 'gondola'
    fill_in 'Email', with: 'gondola@slopeornope.com'
    fill_in 'Password', with: 'password'
    fill_in 'Confirm Password', with: 'password'

    click_button 'Create Account'
    expect(page).to have_content("Welcome! You have signed up successfully.")
    expect(page).to have_content("Sign Out")
  end

  scenario 'required information is not supplied' do
    visit root_path
    click_link 'Sign Up'
    fill_in 'Username', with: ''
    fill_in 'Email', with: ''
    fill_in 'Password', with: ''
    fill_in 'Confirm Password', with: ''
    click_button 'Create Account'

    expect(page).to have_content("Email can't be blank")
    expect(page).to have_content("Username can't be blank")
    expect(page).to have_content("Password can't be blank")
    expect(page).to_not have_content("Welcome! You have signed up successfully.")

  end


  scenario 'password confirmation does not match confirmation' do
    visit root_path
    click_link 'Sign Up'
    fill_in 'Username', with: 'gondola'
    fill_in 'Email', with: 'gondola@slopeornope.com'
    fill_in 'Password', with: 'password'
    fill_in 'Confirm Password', with: 'password5'
    click_button 'Create Account'

    expect(page).to have_content("Password confirmation doesn't match Password")
  end
end
