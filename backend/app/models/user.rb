class User < ApplicationRecord
    has_secure_password
    has_many :galleries, dependent: :destroy

    validates_presence_of :username, :email
    validates_uniqueness_of :username, :email
    
end
