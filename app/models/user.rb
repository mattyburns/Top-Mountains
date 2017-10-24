class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :mountains,
    foreign_key: 'creator_id'

  has_many :reviews

  mount_uploader :avatar, AvatarUploader


  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  validates :username, presence: true, length: { in: 6..20 }
  validates_integrity_of  :avatar
  validates_processing_of :avatar



  def admin?
    role == "admin"
  end

  private
    def avatar_size_validation
      errors[:avatar] << "should be less than 500KB" if avatar.size > 0.5.megabytes
    end

end
