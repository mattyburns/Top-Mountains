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

    it "renders the body" do
      expect(mail.text_part.body.raw_source).to match("Hello skibud22,\n\nskibud22 has left a new review for the mountain you created - Loon!\n\nGo check it out here: http://localhost:3000/mountains/#{loon.id}\n\nCold hands, but warm wishes,\nThe Gondolavelopers")
      expect(mail.html_part.body.raw_source).to match("<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />
    <style>
      /* Email styles need to be inline */
    </style>
  </head>

  <body>
    <p>Hello skibud22,</p>

<p>skibud22 has left a new review for the mountain you created - Loon!</p>

<p>Go check it out here: <a href=\"http://localhost:3000/mountains/#{loon.id}\">Loon</a></p>

<p>Cold hands, but warm wishes,<br />
The Gondolavelopers</p>

  </body>
</html>
")
    end
  end
end
