class UserSerializer < ActiveModel::Serializer

  attributes :id, :username, :email, :galleries 

  def serialize_gallery_thumbs(galleries)
    galleries.map do |gal|
      if gal.photos.length != 0
        {
        id: gal.id, 
        title: gal.title, 
        cover: gal.photos[0].image_url
        }
      end
    end
  end

  def galleries
    if object.galleries.length != 0
      serialize_gallery_thumbs(object.galleries)
    else
      []
    end
  end    
end
