class Contact < ApplicationRecord
  with_option presence: true do
    validates :name
    validates :mail_address
    validates :message
  end
end
