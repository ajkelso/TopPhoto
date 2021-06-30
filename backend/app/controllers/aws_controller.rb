class AwsController < ApplicationController
    def set_s3_direct_post
        filename = params[:name]
        file_type = params[:type]
        file_size = params[:size]
        key = "uploads/#{file_size}/#{filename}"
        
        signer = Aws::S3::Presigner.new
        post_url = signer.presigned_url(:put_object, bucket: "topphoto", key: key, acl: 'public-read', content_type: file_type)
        get_url = "https://topphoto.s3-us-east-2.amazonaws.com/#{key}"
        
        render json: { post_url: post_url, get_url: get_url, }
        
    end
  
    private

    def aws_params
        params.permit(:name, :size, :type)
    end

end
