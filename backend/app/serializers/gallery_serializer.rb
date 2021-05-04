class GallerySerializer < ActiveModel::Serializer
  attributes :id, :title, :goal, :photos

  def photos
    photos = object.photos.sort_by { |p| p.favorites }.reverse!
    top_photos = photos.select {|p| p.favorites == photos[0].favorites}   
    top_photos.map do |photo|
      {
        id: photo.id,
        favorites: photo.favorites,
        url: photo.image_url
      }
    end
  end

end
