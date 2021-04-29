class AuthController < ApplicationController
  
  skip_before_action :authorized, only: [:create]

  def create
    @user = User.find_by(username: user_login_params[:username])
      if @user && @user.authenticate(user_login_params[:password])
          token = encode_token({ user_id: @user.id })
          render json: { user: UserSerializer.new(@user) , jwt: token, message: "Welcome back, #{@user.username}!" }, status: :accepted
      else
          render json: { error: 'Invalid username or password' }, status: :unauthorized
      end
  end

  def verify
    byebug
    render json: { user: UserSerializer.new(@user) } , status: :accepted
  end


  private

  def user_login_params
      params.require(:user).permit(:username, :password)
  end

end
