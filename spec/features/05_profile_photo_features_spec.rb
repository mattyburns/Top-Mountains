require 'spec_helper'
require 'rails_helper'

feature 'profile photo' do
  xscenario 'user uploads a profile photo' do
    visit root_path
    click_link "Sign Up"
    fill_in "Username", with: "Snape Granger"
    page.attach_file "Avatar", "#{Rails.root}/spec/support/images/ski-avatar.png"

    fill_in "Email", with: "Severus@snape.com"
    fill_in "Password", with: "HarryPotter"
    fill_in "Password confirmation", with: "HarryPotter"
    click_button "Create Account"
    expect(page).to have_content "Welcome! You have signed up successfully."

  end
end
