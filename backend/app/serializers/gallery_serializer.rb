class GallerySerializer < ActiveModel::Serializer
  attributes :id, :title, :goal, :images

  def images
    object.photos.map do |photo|
      {
        id: photo.id,
        favorites: photo.favorites,
        url: photo.image_url
      }
    end
  end

end
