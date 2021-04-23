class User < ApplicationRecord
    has_many :galleries, dependent: :destroy
end
