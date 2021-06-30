class AddGetUrlToPhotos < ActiveRecord::Migration[6.0]
  def change
    add_column :photos, :post_url, :string
  end
end
