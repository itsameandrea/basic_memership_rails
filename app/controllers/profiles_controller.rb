class ProfilesController < ApplicationController
    
    def new
        # form where a user can fill out his own profile.
    
        @user = current_user
        
        @profile = Profile.new
    end

    def create
       
       @user = current_user
       
       @profile = @user.build_profile(profile_params)
    
       if @profile.save

          flash[:success] = "Profile updated"
          redirect_to user_path(current_user)
          
      else
          flash[:danger] = "Error occurred, profile hasn't been updated"
          render action: :new
      end
      
      
    end
    
    def edit
       
       @user = current_user
       
       @profile = @user.profile
        
    end
    
    def update
        
        @user = current_user
        
        @profile = @user.profile
        
        if @profile.update_attributes(profile_params)
            
          flash[:success] = "Profile updated"
          redirect_to user_path(current_user)
          
        else
          flash[:danger] = "Error occurred, profile hasn't been updated"
          render action: :edit
        end
    end
    
    
    private
        def profile_params
            params.require(:profile).permit(:first_name, :last_name, :job_title, :phone_number, :contact_email, :description)
        end 

end