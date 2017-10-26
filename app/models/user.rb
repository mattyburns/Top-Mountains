class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :mountains,
    foreign_key: 'creator_id'

  has_many :reviews
  has_many :upvotes

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  validates :username, presence: true, length: { in: 6..20 }

  def admin?
    role == "admin"
  end

end
