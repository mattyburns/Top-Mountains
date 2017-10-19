Rails.application.routes.draw do
  root "mountains#index"
  devise_for :users, :controllers => { :registrations => :registrations}

  namespace :api do
    namespace :v1 do
      resources :mountains, only: [:create]
    end
  end

  resources :mountains do
    resources :reviews, except: [:index, :show]
  end
  resources :users, only: [:show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
