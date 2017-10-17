require 'rails_helper'

# As a general user when I visit the HomePage
# I want to see a search bar
# So that I can search for a mountain to review

feature "visitor searches for mountain in the main search bar" do
  scenario "visitor searches for mountain" do
    visit root_path
    fill_in 'Search', with: 'Stowe'
    click_button 'Search'
  end
end
