require "rails_helper"
RSpec.describe Api::V1::MountainsController, type: :controller do
  describe "POST#create" do


    it "creates a new mountain" do
      skibuddy = User.create(username: "skibud22", email: "skibuddy@aol.com", password: "isuredoloveskiing")


      post_json = {
        name: "Steamboat Springs 1",
        address: "1 Mountain Rd",
        city: "Steamboat Springs",
        state: "CO",
        zip: "98945",
        imageUrl: "www.Steamboat.com",
        creatorId: skibuddy.id
      }.to_json


      expect{ post(:create, body: post_json)}.to change{ Mountain.count }.by 1
    end
    it "returns the json of the newly posted mountain" do

      skibuddy = User.create(username: "skibud22", email: "skibuddy@aol.com", password: "isuredoloveskiing")

      post_json = {
        name: "Steamboat Springs 2",
        address: "1 Mountain Rd",
        city: "Steamboat Springs",
        state: "CO",
        zip: "98945",
        imageUrl: "www.Steamboat.com",
        creatorId: skibuddy.id
      }.to_json

      post(:create, body: post_json)
      returned_json = JSON.parse(response.body)

      mountain = returned_json["mountain"]

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(mountain).to be_kind_of(Hash)
      expect(mountain).to_not be_kind_of(Array)
      binding.pry
      expect(mountain["name"]).to eq "Steamboat Springs 2"
      expect(mountain["address"]).to eq "1 Mountain Rd"
      expect(mountain["city"]).to eq "Steamboat Springs"
      expect(mountain["state"]).to eq "CO"
      expect(mountain["zip"]).to eq "98945"
      expect(mountain["image_url"]).to eq "www.Steamboat.com"
      expect(mountain["creator_id"]).to eq skibuddy.id
    end
  end
end
