class Mountain < ApplicationRecord
  belongs_to :creator,
    class_name: 'User',
    foreign_key: "creator_id"

  validates :username, presence: true, uniqueness: true
  validates :city, presence: true
  validates :address, presence: true
  validates :state, presence: true
  validates :zip, presence: true


end
