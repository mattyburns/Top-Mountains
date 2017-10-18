require 'rails_helper'

xfeature "visitor can add new mountain" do
  xscenario "visitor is logged in and adds a mountain successfully" do
  #find out specific route
    visit new_mountain_path
    expect(page).to have_content "Sign Out"

    expect(page).to have_content "Add a New Mountain"

    fill_in "Name", with: "Stowe"
    fill_in "Address", with: "5248 Mountain Road"
    fill_in "City", with: "Stowe"
    fill_in "State", with: "VT"
    fill_in "Zip", with: "02135"
    fill_in "Mountain's Website URL", with: "http://www.stowe.com/"

    click_button "Save"

    expect(page).to have_content "Mountain added successfully"
    expect(page).to have_content "Stowe"
    expect(page).to have_content "http://www.stowe.com/"
  end

  xscenario "visitor is signed in and does not provide proper information for a mountain" do
    #find out specific route
    visit new_mountain_path

    expect(page).to have_content "Sign Out"

    expect(page).to have_content "Add a New Mountain"

    fill_in "Name", with: ""
    fill_in "Address", with: ""
    fill_in "City", with: ""
    fill_in "State", with: ""
    fill_in "Zip", with: ""
    fill_in "Mountain's Website URL", with: ""

    click_button "Save"
  end

  xscenario "visitor is not signed in and sees a link to sign up/log in" do
    #find out specific route
    visit new_mountain_path

    expect(page).to have_content "Sign Up/Log In"

    expect(page).to have_content "Looks like you're not logged in! If you want to add a new mountain, please sign up or log in!"
  end
end
