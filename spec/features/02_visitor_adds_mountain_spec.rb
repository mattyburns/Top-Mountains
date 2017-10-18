require 'rails_helper'

feature "visitor can add new mountain" do
  scenario "visitor is logged in and adds a mountain successfully" do

    visit new_mountain_path
    expect(page).to have_content "Sign Out"

    expect(page).to have_content "Add a New Mountain"

    fill_in "Name", with: "Powder Mountain"
    fill_in "Address", with: "Snowy Road"
    fill_in "City", with: "Stowe"
    select "Utah", from: "State"
    fill_in "Zip", with: "02135"

    click_button "Add Mountain"

    expect(page).to have_content "Mountain added successfully!"
    expect(page).to have_content "Stowe"
  end

  scenario "visitor is signed in and does not provide proper information for a mountain" do

    visit new_mountain_path

    expect(page).to have_content "Sign Out"

    expect(page).to have_content "Add a New Mountain"

    fill_in "Name", with: ""
    fill_in "Address", with: ""
    fill_in "City", with: ""
    fill_in "Zip", with: ""

    click_button "Add Mountain"

    expect(page).to have_content "Name can't be blank"
    expect(page).to have_content "City can't be blank"
    expect(page).to have_content "Address can't be blank"
    expect(page).to have_content "Zip can't be blank"
  end

  scenario "visitor is not signed in and sees a link to sign up/log in" do

    visit new_mountain_path

    expect(page).to have_content "Looks like you're not logged in! If you want to add a new mountain, please sign up or log in!"
  end
end
