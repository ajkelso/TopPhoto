module CommonGallery
    def serialize_gallery_thumbs(galleries)
        galleries.map do |gal|
            if gal.photos.length != 0
                {
                id: gal.id, 
                title: gal.title, 
                cover: gal.photos[0].image_url
                }
            end`
        end
    end
end