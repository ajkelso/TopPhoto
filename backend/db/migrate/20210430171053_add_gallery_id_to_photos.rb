class AddGalleryIdToPhotos < ActiveRecord::Migration[6.0]
  def change
    add_column :photos, :gallery_id, :integer
  end
end
