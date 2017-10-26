class MountainSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state, :zip, :image_url, :trail_count, :ticket_price, :rental_price, :creator_id, :reviews

  has_many :reviews
end
