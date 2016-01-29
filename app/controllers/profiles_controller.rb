class ProfilesController < ApplicationController
    
    def new
        # form where a user can fill out his own profile.
    
        @user = current_user
        
        @profile = @user.build_profile
    end
    
    def create
        
    
    


end