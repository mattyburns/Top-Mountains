class UserReviewedItemMailer < ApplicationMailer
  default from: "gondolavelopers@gmail.com"
  def email_mountain_creator(review)
    @new_review = review
    @mountain = @new_review.mountain
    @user = @mountain.creator
    mail to: @user.email,
      subject: "New Review for #{@mountain.name}"
  end
end
