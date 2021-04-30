class GalleriesController < ApplicationController

    def create

        @gallery = Gallery.create(user_id: @user.id, title: gallery_params[:title])
        gallery_params[:images].map do |img|
            Photo.create(image: img, gallery_id: @gallery.id) # attaches the uploaded file
        end
        render json: { gallery: GallerySerializer.new(@gallery), message: "Gallery Successfully Created!" }, status: :created 
        
    end

    private

    def gallery_params
        params.permit(:title, images: [])
    end

end
