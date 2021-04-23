class CreatePhotos < ActiveRecord::Migration[6.0]
  def change
    create_table :photos do |t|
      t.text :image_data
      t.integer :favorites

      t.timestamps
    end
  end
end
