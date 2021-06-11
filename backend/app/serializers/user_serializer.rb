class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :galleries 

  def galleries
    if object.galleries.length
      true
    else
      false
    end
  end

  # def galleries
  #   object.galleries.map do |gal|
  #     if gal.photos.length
  #       {
  #         id: gal.id, 
  #         title: gal.title, 
  #         cover: gal.photos[0].image_url
  #       }
  #     end
  #   end
  # end
end
