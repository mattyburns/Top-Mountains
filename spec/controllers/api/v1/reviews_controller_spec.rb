require "rails_helper"
RSpec.describe Api::V1::ReviewsController, type: :controller do
  let!(:skibuddy) {User.create(username: "skibud22", email: "skibuddy@aol.com", password: "isuredoloveskiing")}
  let!(:ward) {Mountain.create(name: "Ward Hill", address: "2 Mountain Rd", city: "Shrewsbury", state: "MA", zip: "01590", image_url: "www.skiward.com", creator: skibuddy)}
  let!(:ward_review) {Review.create(user: skibuddy, mountain: ward, rating: 1)}

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
    review = returned_json["review"]

    expect(response.status).to eq 200
    expect(response.content_type).to eq("application/json")

    expect(review).to be_kind_of(Hash)
    expect(review).to_not be_kind_of(Array)

    expect(review["rating"]).to eq 1
    expect(review["skiing_review"]).to eq "No good"
    expect(review["food_review"]).to eq "It was bad"
    expect(review["lodging_review"]).to eq "This was ok"
    expect(review["user_id"]).to eq skibuddy.id
    expect(review["mountain_id"]).to eq ward.id
  end
end

end
