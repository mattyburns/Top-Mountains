Rails.application.routes.draw do
  root "mountains#index"
  devise_for :users

  resources :mountains do
    resources :reviews, except: [:index, :show]
  end
end
