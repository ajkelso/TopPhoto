class PhotosController < ApplicationController
    def update
        @photo = Photo.find_by(id: params[:id])
        if @photo.update(favorites: 0)
            render json: {message: "Photo upvoted!"}
        else 
            render json: {error: "Something went wrong..."}
        end
    end
end
