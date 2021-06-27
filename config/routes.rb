Rails.application.routes.draw do
  get 'contacts/index'
  root to: "contacts#index"
  resources :contacts, only: [:index, :create]
end
