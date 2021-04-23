class CreateGalleries < ActiveRecord::Migration[6.0]
  def change
    create_table :galleries do |t|
      t.string :title
      t.integer :user_id
      t.integer :goal

      t.timestamps
    end
  end
end
