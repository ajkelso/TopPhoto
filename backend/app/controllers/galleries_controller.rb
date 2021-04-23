class GalleriesController < ApplicationController

    def create
        byebug
        @gallery = Gallery.create(gallery_params)
        params[:photos].each { |p| Cloudinary::Uploader.upload(p) }
        
    end

    private

    def gallery_params
        params.permit(:user_id, :title, photos: [])
    end

end
