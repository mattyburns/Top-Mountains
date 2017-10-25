require "spec_helper"
require "rails_helper"

RSpec.describe UserReviewedItemMailer, type: :mailer do
  scenario "someone reviewed someone else's mountain" do
  #   ActionMailer::ApplicationMailer.deliveries.clear
    reviewer = FactoryGirl.create(:user)
    mountain = Mountain.create(
      id: 5,
      name: "Space Mountain",
      address: "Disney St",
      city: "Orlando",
      state: "FL",
      zip: "98765",
      creator_id: 1
    )

    login_as(reviewer, :scope => :user)

    visit new_mountain_review_path(mountain)

    fill_in "Rating", with: 5
    fill_in "Skiing Review", with: "This had no skiing!"
    click_button "Submit"

    expect(page).to have_content("This had no skiing!")
    expect(ActionMailer::Base.deliveries.count).to eq(1)
  end
end
