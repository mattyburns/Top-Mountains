class UserReviewedItemMailer < ApplicationMailer
  default from: "gondolavelopers@gmail.com"
  def new_review(review)
    @review = review
    @mountain = @review.mountain
    @user = @mountain.creator
    mail to: @user.email,
      subject: "New Review for #{@mountain.name}"
  end
end
