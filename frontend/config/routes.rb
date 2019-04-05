Rails.application.routes.draw do
  get 'frontend/index'

  get '/', to: 'frontend#index'
  get '/poll', to: 'frontend#poll'
  post '/vote', to: 'frontend#vote'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
