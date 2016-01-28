class ApplicationController < ActionController::Base
  
   require "resolv-replace.rb"
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
end
