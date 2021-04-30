class Photo < ApplicationRecord
    include ImageUploader::Attachment(:image) # adds an `image` virtual attribute
    belongs_to :gallery
end
