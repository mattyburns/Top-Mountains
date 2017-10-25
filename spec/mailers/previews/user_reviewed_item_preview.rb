# Preview all emails at http://localhost:3000/rails/mailers/user_reviewed_item
class UserReviewedItemPreview < ActionMailer::Preview
  def new_review
    review = Review.last
    UserReviewedItemMailer.new_review(review)
  end
end
