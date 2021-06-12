class GalleriesController < ApplicationController

    def index
        @galleries = Gallery.where(user_id: params[:user_id])
        render json: {galleries: serialize_galleries(@galleries)}
    end
    
    def create

        @gallery = Gallery.create(user_id: @user.id, title: gallery_params[:title])
        gallery_params[:images].map do |img|
            Photo.create(image: img, gallery_id: @gallery.id) # attaches the uploaded file
        end
        render json: { gallery: GallerySerializer.new(@gallery), message: "Gallery Successfully Created!" }, status: :created 
        
    end

    def show
        @gallery = Gallery.find_by(id: params[:id])
        render json: @gallery
    end

    private

    def gallery_params
        params.permit(:id, :title, images: [])
    end

    def serialize_galleries(galleries)
        galleries.map do |gal|
            if gal.photos.length != 0
                {
                id: gal.id, 
                title: gal.title, 
                cover: gal.photos[0].image_url
                }
            end
        end
    end

end
