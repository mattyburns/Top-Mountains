Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users, :controllers => { :registrations => :registrations}

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show, :destroy]
      resources :reviews, only: [:create, :destroy] #this is just to test the reviews controller
      resources :mountains, only: [:create, :index, :show, :destroy] do
        resources :reviews, only: [:create]
      end
      resources :upvotes, only: [:create]
      scope :user do
        get 'is_signed_in', to: 'user#is_signed_in?'
      end
    end
  end

  namespace :admin do
    resources :users, only: [:index, :destroy]
  end

  get '/mountains/:id', to: 'static_pages#index'

  resources :mountains do
    resources :reviews, except: [:index, :show]
  end

  resources :users, only: [:show]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
