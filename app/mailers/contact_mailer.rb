class ContactMailer < ApplicationMailer
  default from: 'system@example.com'

  def contact_mail(contact)
    @contact = contact
    mail(
      to: 'id00ced1.uzg@gmail.com',
      subject: 'ポートフォリオサイトお問合せ'
    )
  end
end
