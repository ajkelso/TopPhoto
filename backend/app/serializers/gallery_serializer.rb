class GallerySerializer < ActiveModel::Serializer
  attributes :id, :title, :goal, :photos

  def photos
    photos = object.photos.where(favorites: 1)
    # top_photos = photos.select {|p| p.favorites == photos[0].favorites}   
    photos.map do |photo|
      {
        id: photo.id,
        favorites: photo.favorites,
        url: photo.image_url
      }
    end
  end

end
