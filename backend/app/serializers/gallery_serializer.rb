class GallerySerializer < ActiveModel::Serializer
  attributes :id, :title, :goal, :photos
end
