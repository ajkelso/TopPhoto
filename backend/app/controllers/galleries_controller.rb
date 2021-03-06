class GalleriesController < ApplicationController

    def index
        @galleries = Gallery.where(user_id: params[:user_id])
        render json: {galleries: serialize_gallery_thumbs(@galleries)}
    end
    
    def create
        gallery = Gallery.create(user_id: current_user.id, title: (gallery_params[:title] == "" ? "Gallery #{current_user.galleries.length + 1}" : gallery_params[:title]))
        create_photos(gallery.id)
        post_urls = gallery.photos.map { |p| p.post_url }
        render json: { post_urls: post_urls, gallery_id: gallery.id } 
    end

    def show
        @gallery = Gallery.find_by(id: params[:id])
        if @gallery && @gallery.user_id == current_user.id
            render json: @gallery
        else
            render json: {error: "Choose another gallery to compare"}
        end
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

    def serialize_gallery_thumbs(galleries)
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
