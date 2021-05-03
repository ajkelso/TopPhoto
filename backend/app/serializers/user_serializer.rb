class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :galleries 

  def galleries
    object.galleries.map do |gal|
      {
        id: gal.id, 
        title: gal.title, 
        cover: gal.photos[0].image_url
      }
    end
  end
end
