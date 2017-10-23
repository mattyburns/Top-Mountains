Rails.application.routes.draw do
  root "mountains#index"
  devise_for :users, :controllers => { :registrations => :registrations}

  resources :mountains

  resources :mountains do
    resources :reviews, except: [:index, :show]
  end
  resources :users, only: [:show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
