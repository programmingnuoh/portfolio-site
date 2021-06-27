class Contact < ApplicationRecord
  with_options presence: true do
    validates :name
    validates :mail_address
    validates :message
  end
end
