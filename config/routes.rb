Rails.application.routes.draw do
  root "mountains#index"
  devise_for :users, :controllers => { :registrations => :registrations}

  namespace :api do
    namespace :v1 do
      resources :mountains, only: [:create, :index, :show]
      resources :upvotes, only: [:create, :update]
      scope :user do
        get 'is_signed_in', to: 'user#is_signed_in?'
      end
    end
  end

  namespace :admin do
    resources :users, only: [:index, :destroy]
  end

  resources :mountains do
    resources :reviews, except: [:index, :show]
  end

  resources :users, only: [:show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
