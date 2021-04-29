Rails.application.routes.draw do
  resources :users
  
  get '/verify', to: 'auth#verify'
  
  post "/photos", to: 'photos#create'
  
  post '/login', to: 'auth#create'

  
  
  #for direct upload
  # mount Shrine.presign_endpoint(:cache) => "/presign"
end
