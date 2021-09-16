class AddDefaultValueToFavorites < ActiveRecord::Migration[6.0]
  def change
    change_column_default :photos, :favorites, 1
  end
end
