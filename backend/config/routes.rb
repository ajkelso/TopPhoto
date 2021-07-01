Rails.application.routes.draw do
  resources :users do
    resources :galleries, only: [:index]
  end
  resources :galleries
  resources :photos
  
  get '/profile', to: 'users#profile'
  
  post "/photos", to: 'photos#create'
  
  post '/login', to: 'auth#create'

end
