require "spec_helper"
require "rails_helper"

RSpec.describe UserReviewedItemMailer, :type => :mailer do
  describe "sends email upon new review on mountain" do
    let(:skibuddy) {User.create(username: "skibud22", email: "skibuddy@aol.com", password: "isuredoloveskiing")}
    let(:loon) {Mountain.create(name: "Loon", address: "1 Mountain Rd", city: "Lincoln", state: "NH", zip: "05149", image_url: "www.skiloon.com", creator: skibuddy)}
    let(:loon_review) {Review.create(user: skibuddy, mountain: loon, rating: 5, skiing_review: "Excellent snowmaking", food_review: "Black Diamond Bar is the place to go for apres ski", lodging_review: "We stayed slopeside and it was awesome!")}
    let(:mail) { UserReviewedItemMailer.email_mountain_creator(loon_review) }

    it "renders the header" do
      expect(mail.subject).to eq("New Review for Loon")
      expect(mail.to).to eq(["skibuddy@aol.com"])
      expect(mail.from).to eq(["gondolavelopers@gmail.com"])
    end

    # it "renders the body" do
    #   expect().to eq("Hello skibud22,\n\n      skibud22 has left a new review for the mountain you created - Loon!\n\n      Go check it out at http://localhost:3000/mountains/1\n\n      Cold hands, but warm wishes,\n      The Gondolavelopers")
    # end
  # describe "html version" do
  #   it_behaves_like "Hello skibud22,\n\n      skibud22 has left a new review for the mountain you created - Loon!\n\n      Go check it out at http://localhost:3000/mountains/1\n\n      Cold hands, but warm wishes,\n      The Gondolavelopers" do
  #     let(:part) { get_message_part(mail, /html/) }
  #   end
    #
    # it "renders the body" do
    #   expect(mail.body.encoded).to match("Hello skibud22,\n\n      skibud22 has left a new review for the mountain you created - Loon!\n\n      Go check it out at http://localhost:3000/mountains/1\n\n      Cold hands, but warm wishes,\n      The Gondolavelopers")
    # end
  end
end
