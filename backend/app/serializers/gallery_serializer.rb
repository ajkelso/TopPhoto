class GallerySerializer < ActiveModel::Serializer
  attributes :id, :title, :goal, :photos

  def photos
    photos = object.photos.sort_by { |p| p.favorites }.reverse!.map do |photo|
      {
        id: photo.id,
        favorites: photo.favorites,
        url: photo.image_url
      }
    end



  end

end
