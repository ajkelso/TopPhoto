class CreatePhotos < ActiveRecord::Migration[6.0]
  def change
    create_table :photos do |t|
      t.string :image_url
      t.string :name
      t.string :file_type
      t.integer :gallery_id
      t.integer :favorites, :default => 0

      t.timestamps
    end
  end
end
