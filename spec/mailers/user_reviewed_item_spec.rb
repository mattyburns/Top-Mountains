# require "rails_helper"
# require "spec_helper"
#
# RSpec.describe UserReviewedItemMailer, type: :mailer do
#   describe "review" do
#     let( :user ){ create :user, email: 'test_email@example.com'}
#     let( :mountain ){ create :mountain, creator: user }
#     let( :review ){ create :review, user_id: user.id }
#     let( :mail ){ UserReviewedItemMailer.send_mail( mountain ) }
#
#     it "renders the body" do
#       expect(mail.subject).to eq("New Review for #{@mountain.name}")
#     end
#   end
# end
