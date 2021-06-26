class ContactsController < ApplicationController
  def index
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      ContactMailer.contact_mail(@contact).deliver
      redirect_to root_path
    else
      flash.now[:alert] = '送信に失敗しました'
      render :index
    end
  end

  private
  def contact_params
    params.require(:contact).permit(:name, :mail_address, :message)
  end
end
