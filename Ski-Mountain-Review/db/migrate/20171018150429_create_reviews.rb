class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.belongs_to :user, null: false
      t.belongs_to :mountain, null: false
      t.integer :rating, null: false
      t.string :skiing_review
      t.string :food_review
      t.string :lodging_review
    end
  end
end
