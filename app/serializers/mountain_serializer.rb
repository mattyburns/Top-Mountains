class MountainSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state, :zip, :image_url, :trail_count, :ticket_price, :rental_price, :creator_id, :rating, :reviews

  has_many :reviews

  def rating
    object.rating.round(1)
  end
end
