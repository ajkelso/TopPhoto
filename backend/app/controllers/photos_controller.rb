class PhotosController < ApplicationController
    def create
        @photos = photo_params[:images].map do |img|
            Photo.create(image: img) # attaches the uploaded file
        end
        render json: @photos, each_serializer: PhotoSerializer
    end
    
    private

    def photo_params
        params.permit(images: [])
    end

end
