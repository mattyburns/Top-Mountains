class Review < ApplicationRecord
  belongs_to :mountain
  belongs_to :user

  has_many :upvotes

  validates :rating, presence: true, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }

  def vote_total
    upvotes.reduce(0) {|sum, upvote| sum += upvote.vote}
  end
end
