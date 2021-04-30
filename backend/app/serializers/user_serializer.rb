class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :galleries 

  def galleries
    object.galleries.map do |gal|
      GallerySerializer.new(gal)
    end
  end
end
