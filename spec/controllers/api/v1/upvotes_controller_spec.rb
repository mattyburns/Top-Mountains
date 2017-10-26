require "spec_helper"
require "rails_helper"

RSpec.describe Api::V1::UpvotesController, type: :controller do
  let!(:skibuddy) {User.create(username: "skibud22", email: "skibuddy@aol.com", password: "isuredoloveskiing")}
  let!(:boardergal) {User.create(username: "boardergal99", email: "boardergal@aol.com", password: "ilivetoride")}
  let!(:ward) {Mountain.create(name: "Ward Hill", address: "2 Mountain Rd", city: "Shrewsbury", state: "MA", zip: "01590", image_url: "www.skiward.com", creator: skibuddy)}
  let!(:loon) {Mountain.create(name: "Loon", address: "1 Mountain Rd", city: "Lincoln", state: "NH", zip: "05149", image_url: "www.skiloon.com", creator: skibuddy)}
  let!(:suicide_six) {Mountain.create(name: "Suicide Six", address: "3 Mountain Rd", city: "Pomfret", state: "VT", zip: "03981", image_url: "www.suicidesix.com", creator: skibuddy)}
  let!(:ward_review) {Review.create(user: skibuddy, mountain: ward, rating: 1)}
  let!(:loon_review) {Review.create(user: skibuddy, mountain: loon, rating: 5, skiing_review: "Excellent snowmaking", food_review: "Black Diamond Bar is the place to go for apres ski", lodging_review: "We stayed slopeside and it was awesome!")}
  let!(:loon_review2) {Review.create(user: skibuddy, mountain: loon, rating: 4)}

  describe "POST#create" do
    it "creates a new upvote if the user has not yet voted" do

      post_json = {
        userId: skibuddy.id,
        reviewId: loon_review.id,
        vote: 1
      }.to_json

      expect{ post(:create, body: post_json)}.to change{ Upvote.count }.by 1
    end

    it "returns the json of all reviews of current mountain and updates total votes" do
      previous_vote_count = loon_review.vote_total
      post_json = {
        userId: boardergal.id,
        reviewId: loon_review.id,
        vote: 1
      }.to_json

      post(:create, body: post_json)
      returned_json = JSON.parse(response.body)
      reviews = returned_json["reviews"]
      review_with_new_upvote = reviews.select { |review| review["id"] == loon_review.id}.first
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(reviews).to be_kind_of(Array)

      expect(review_with_new_upvote["user_id"]).to eq skibuddy.id
      expect(review_with_new_upvote["id"]).to eq loon_review.id
      expect(review_with_new_upvote["vote_total"]).to eq previous_vote_count + 1
    end

    it "if the user changes their vote the vote updates and vote count changes accordingly" do
      Upvote.create(user: boardergal, review: loon_review, vote: 1)

      post_json = {
        userId: boardergal.id,
        reviewId: loon_review.id,
        vote: -1
      }.to_json

      post(:create, body: post_json)
      returned_json = JSON.parse(response.body)
      reviews = returned_json["reviews"]
      review_with_new_upvote = reviews.select { |review| review["id"] == loon_review.id}.first
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(review_with_new_upvote["vote_total"]).to eq(-1)

    end
  end
end
