class UserSerializer < ActiveModel::Serializer
  include CommonGallery
  attributes :id, :username, :email, :galleries 

  def galleries
    if object.galleries.length != 0
      serialize_gallery_thumbs(object.galleries)
    else
      []
    end
  end
end
