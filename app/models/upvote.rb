class Upvote < ApplicationRecord
 belongs_to :user
 belongs_to :review
 validates :vote, numericality: { greater_than_or_equal_to: -1, less_than_or_equal_to: 1 }
end
