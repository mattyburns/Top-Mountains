# Preview all emails at http://localhost:3000/rails/mailers/user_reviewed_item
class UserReviewedItemPreview < ActionMailer::Preview
  def email_mountain_creator
    review = Review.last
    UserReviewedItemMailer.email_mountain_creator(review)
  end
end
