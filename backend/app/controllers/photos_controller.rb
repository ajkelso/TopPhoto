class PhotosController < ApplicationController
    
    def create
        @gallery = Gallery.create(user_id: @user.id, title: "Another Test", goal: 1)
        @photos = photo_params[:images].map do |img|
            Photo.create(image: img, gallery_id: @gallery.id) # attaches the uploaded file
        end
        render json: @photos, each_serializer: PhotoSerializer
    end
    
    private

    def photo_params
        params.permit(images: [])
    end

end
