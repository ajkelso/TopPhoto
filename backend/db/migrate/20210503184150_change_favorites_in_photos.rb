class ChangeFavoritesInPhotos < ActiveRecord::Migration[6.0]
  def change
    change_column :photos, :favorites, :integer, :default => 0
  end
end
