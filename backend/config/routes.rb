Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post "/photos", to: 'photos#create'
  mount Shrine.presign_endpoint(:cache) => "/presign"
end
