class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :mountain_id, :rating, :skiing_review, :food_review, :lodging_review, :vote_total, :username

  def vote_total
    object.vote_total
  end

  def username
    object.user.username
  end
end
