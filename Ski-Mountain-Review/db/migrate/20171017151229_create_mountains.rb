class CreateMountains < ActiveRecord::Migration[5.1]
  def change
    create_table :mountains do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.string :image_url
      t.integer :trail_count
      t.string :ticket_price
      t.string :rental_price
      t.integer :creator_id, null: false
      t.timestamps
    end
    add_index :mountains, :creator_id
  end
end
