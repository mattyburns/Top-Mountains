require "spec_helper"
require "rails_helper"

RSpec.describe Api::V1::ReviewsController, type: controller do
  let!(:skibuddy) {User.create(username: "skibud22", email: "skibuddy@aol.com", password: "isuredoloveskiing")}
  let!(:ward) {Mountain.create(name: "Ward Hill", address: "2 Mountain Rd", city: "Shrewsbury", state: "MA", zip: "01590", image_url: "www.skiward.com", creator: skibuddy)}
  let!(:loon) {Mountain.create(name: "Loon", address: "1 Mountain Rd", city: "Lincoln", state: "NH", zip: "05149", image_url: "www.skiloon.com", creator: skibuddy)}
  let!(:suicide_six) {Mountain.create(name: "Suicide Six", address: "3 Mountain Rd", city: "Pomfret", state: "VT", zip: "03981", image_url: "www.suicidesix.com", creator: skibuddy)}
  let!(:ward_review) {Review.create(user: skibuddy, mountain: ward, rating: 1)}
  let!(:loon_review) {Review.create(user: skibuddy, mountain: loon, rating: 5, skiing_review: "Excellent snowmaking", food_review: "Black Diamond Bar is the place to go for apres ski", lodging_review: "We stayed slopeside and it was awesome!")}
  let!(:loon_review2) {Review.create(user: skibuddy, mountain: loon, rating: 4)}

  it "sends an email to the creator of a mountain when a review is posted for that mountain" do
    expect(ActionMailer::Base.deliveries.count).to eq(1)
  end
end
