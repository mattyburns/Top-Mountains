require "spec_helper"
require "rails_helper"

RSpec.describe Api::V1::UpvotesController, type: :controller do
  let!(:skibuddy) {User.create(username: "skibud22", email: "skibuddy@aol.com", password: "isuredoloveskiing")}
  let!(:ward) {Mountain.create(name: "Ward Hill", address: "2 Mountain Rd", city: "Shrewsbury", state: "MA", zip: "01590", image_url: "www.skiward.com", creator: skibuddy)}
  let!(:loon) {Mountain.create(name: "Loon", address: "1 Mountain Rd", city: "Lincoln", state: "NH", zip: "05149", image_url: "www.skiloon.com", creator: skibuddy)}
  let!(:suicide_six) {Mountain.create(name: "Suicide Six", address: "3 Mountain Rd", city: "Pomfret", state: "VT", zip: "03981", image_url: "www.suicidesix.com", creator: skibuddy)}
  let!(:ward_review) {Review.create(user: skibuddy, mountain: ward, rating: 1)}
  let!(:loon_review) {Review.create(user: skibuddy, mountain: loon, rating: 5, skiing_review: "Excellent snowmaking", food_review: "Black Diamond Bar is the place to go for apres ski", lodging_review: "We stayed slopeside and it was awesome!")}
  let!(:loon_review2) {Review.create(user: skibuddy, mountain: loon, rating: 4)}

  # let!(:ward_downvote) {Upvote.create(user: skibuddy, mountain: ward, vote: -1)}

  # before :each do
  #   skibuddy = User.create(username: "skibud22", email: "skibuddy@aol.com", password: "isuredoloveskiing")
  #   login_as(skibuddy, :scope => :user)
  # end

  describe "POST#create" do
    it "creates a new upvote" do

      post_json = {
        userId: skibuddy.id,
        reviewId: loon_review.id,
        vote: 1
      }.to_json

      expect{ post(:create, body: post_json)}.to change{ Upvote.count }.by 1
    end

    it "returns the json of the newly posted upvote" do
      post_json = {
        userId: skibuddy.id,
        reviewId: loon_review.id,
        vote: 1
      }.to_json

      post(:create, body: post_json)
      returned_json = JSON.parse(response.body)
      upvote = returned_json

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(upvote).to be_kind_of(Hash)
      expect(upvote).to_not be_kind_of(Array)

      expect(upvote["user_id"]).to eq skibuddy.id
      expect(upvote["review_id"]).to eq loon_review.id
      expect(upvote["vote"]).to eq 1
    end
  end

  describe "POST#update" do
    let!(:loon_upvote) {Upvote.create(user: skibuddy, review: loon_review, vote: 1)}
    it "does not create a new upvote" do
      post_json = {
        userId: skibuddy.id,
        reviewId: loon_review.id,
        vote: -1
      }.to_json

      expect{ post(:update, params: {id: loon_upvote.id}, body: post_json)}.to change{ Upvote.count }.by 0
    end

    it "changes the vote" do
      post_json = {
        userId: skibuddy.id,
        reviewId: loon_review.id,
        vote: -1
      }.to_json

      post(:update, params: {id: loon_upvote.id}, body: post_json)
      returned_json = JSON.parse(response.body)
      upvote = returned_json

      expect(upvote["vote"]).to eq(-1)
    end

    it "returns the json of the newly updated upvote" do
      post_json = {
        userId: skibuddy.id,
        reviewId: loon_review.id,
        vote: 0
      }.to_json

      post(:update, params: {id: loon_upvote.id}, body: post_json)
      returned_json = JSON.parse(response.body)
      upvote = returned_json

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(upvote).to be_kind_of(Hash)
      expect(upvote).to_not be_kind_of(Array)

      expect(upvote["user_id"]).to eq skibuddy.id
      expect(upvote["review_id"]).to eq loon_review.id

      expect(upvote["vote"]).to eq 0
    end

  end
end
