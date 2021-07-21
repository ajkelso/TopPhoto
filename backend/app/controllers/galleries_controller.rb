class GalleriesController < ApplicationController

    def index
        @galleries = Gallery.where(user_id: params[:user_id])
        render json: {galleries: serialize_galleries(@galleries)}
    end
    
    def create
        gallery = Gallery.create(user_id: current_user.id, title: (gallery_params[:title] == "" ? "Gallery #{current_user.galleries.length + 1}" : gallery_params[:title]))
        create_photos(gallery.id)
        post_urls = gallery.photos.map { |p| p.post_url }
        render json: { post_urls: post_urls } 
    end



    #     @gallery = Gallery.create(user_id: @user.id, title: (gallery_params[:title] == "" ? "Gallery #{current_user.galleries.length + 1}" : gallery_params[:title]))
        
    #     gallery_params[:images].map do |img|
    #         Photo.create(image: img, gallery_id: @gallery.id) # attaches the uploaded file
    #     end
    #     render json: { gallery: GallerySerializer.new(@gallery), message: "Gallery Successfully Created!" }, status: :created 
        
    # end

    def show
        @gallery = Gallery.find_by(id: params[:id])
        render json: @gallery
    end

    def destroy
        @gallery = Gallery.find_by(id: params[:id])
        if @gallery.delete 
            render json: { message: "Gallery deleted!", galleryId: @gallery.id }
        else
            render json: { error: "Gallery not deleted"}
        end
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

    def create_photos(gallery_id)
        params[:images].each do |img|
            filename = img[:img_name]
            file_type = img[:img_type]
            file_size = img[:img_size]
            key = "uploads/#{file_size}/#{filename}"
            signer = Aws::S3::Presigner.new
            post_url = signer.presigned_url(:put_object, bucket: "topphoto", key: key, acl: 'public-read', content_type: file_type)
            get_url = "https://topphoto.s3-us-east-2.amazonaws.com/#{key}"
            Photo.create(gallery_id: gallery_id, name: filename, file_type: file_type, image_url: get_url, post_url: post_url)
        end
    end

end
