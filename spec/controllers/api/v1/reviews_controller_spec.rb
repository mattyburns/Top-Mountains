require "rails_helper"
RSpec.describe Api::V1::ReviewsController, type: :controller do
  let!(:skibuddy) {User.create(username: "skibud22", email: "skibuddy@aol.com", password: "isuredoloveskiing")}
  let!(:ward) {Mountain.create(name: "Ward Hill", address: "2 Mountain Rd", city: "Shrewsbury", state: "MA", zip: "01590", image_url: "www.skiward.com", creator: skibuddy)}
  let!(:loon) {Mountain.create(name: "Loon", address: "1 Mountain Rd", city: "Lincoln", state: "NH", zip: "05149", image_url: "www.skiloon.com", creator: skibuddy)}
  let!(:suicide_six) {Mountain.create(name: "Suicide Six", address: "3 Mountain Rd", city: "Pomfret", state: "VT", zip: "03981", image_url: "www.suicidesix.com", creator: skibuddy)}
  let!(:ward_review) {Review.create(user: skibuddy, mountain: ward, rating: 1)}
  let!(:loon_review) {Review.create(user: skibuddy, mountain: loon, rating: 5, skiing_review: "Excellent snowmaking", food_review: "Black Diamond Bar is the place to go for apres ski", lodging_review: "We stayed slopeside and it was awesome!")}
  let!(:loon_review2) {Review.create(user: skibuddy, mountain: loon, rating: 4)}

describe "POST#create" do
  it "creates a new review" do

    post_json = {
      rating: "1",
      skiing_review: "No good",
      food_review: "It was bad",
      lodging_review: "This was ok",
      user_id: skibuddy.id,
      mountain_id: ward.id
    }.to_json

    expect{ post(:create, params: { mountain: ward, id: ward.id }, body: post_json)}.to change{ Review.count }.by 1
  end
  it "returns the json of the newly posted review" do

    post_json = {
      rating: "1",
      skiing_review: "No good",
      food_review: "It was bad",
      lodging_review: "This was ok",
      user_id: skibuddy.id,
      mountain_id: ward.id
    }.to_json

    post(:create, body: post_json)
    returned_json = JSON.parse(response.body)

    expect(response.status).to eq 200
    expect(response.content_type).to eq("application/json")

    expect(returned_json).to be_kind_of(Hash)
    expect(returned_json).to_not be_kind_of(Array)

    expect(returned_json["rating"]).to eq 1
    expect(returned_json["skiing_review"]).to eq "No good"
    expect(returned_json["food_review"]).to eq "It was bad"
    expect(returned_json["lodging_review"]).to eq "This was ok"
    expect(returned_json["user_id"]).to eq skibuddy.id
    expect(returned_json["mountain_id"]).to eq ward.id
  end
end

end
