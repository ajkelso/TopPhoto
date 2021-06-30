class AwsController < ApplicationController
    def set_s3_direct_post
        gallery = Gallery.create(user_id: current_user.id, title: params[:title])
        post_urls = params[:images].map do |img|
            filename = img[:img_name]
            file_type = img[:img_type]
            file_size = img[:img_size]
            key = "uploads/#{file_size}/#{filename}"
            signer = Aws::S3::Presigner.new
            post_url = signer.presigned_url(:put_object, bucket: "topphoto", key: key, acl: 'public-read', content_type: file_type)
            get_url = "https://topphoto.s3-us-east-2.amazonaws.com/#{key}"
            Photo.create(gallery_id: gallery.id, name: filename, file_type: file_type, image_url: get_url, post_url: post_url)
            post_url
        end
        byebug
        render json: { post_urls: post_urls }
        
    end
  
    private

    def aws_params
        params.permit(:img_name, :img_size, :img_type)
    end

end
