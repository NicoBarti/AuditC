Rails.application.routes.draw do

  scope '/api' do
    mount_devise_token_auth_for 'User', at: 'auth'
    # resources :usuarios
    resources :audits
    resources :profiles
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
