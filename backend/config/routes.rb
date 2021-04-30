Rails.application.routes.draw do
  resources :users
  resources :galleries
  
  get '/profile', to: 'users#profile'
  
  post "/photos", to: 'photos#create'
  
  post '/login', to: 'auth#create'

  
  
  #for direct upload
  # mount Shrine.presign_endpoint(:cache) => "/presign"
end
