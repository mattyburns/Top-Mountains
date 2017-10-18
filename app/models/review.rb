class Review < ApplicationRecord
  belongs_to :mountain
  belongs_to :user

  validates :rating, presence: true

end
