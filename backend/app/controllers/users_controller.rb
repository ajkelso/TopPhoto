class UsersController < ApplicationController

    def create
        @user = User.create(user_params)
        if @user.valid?
            @token = encode_token(user_id: @user.id)
            render json: { user: UserSerializer.new(@user), jwt: @token, message: "Welcome, #{@user.username}!" }, status: :created
        else
            render json: { error: @user.errors.full_messages.to_sentence }, status: :not_acceptable
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :email)
    end

end
