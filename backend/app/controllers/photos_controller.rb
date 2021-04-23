class PhotosController < ApplicationController
    def create
        photo_params[:images].each do |img|
            Photo.create(image: img) # attaches the uploaded file
        # ...
        end
    end
    
    private

    def photo_params
        params.permit(images: [])
    end

end
