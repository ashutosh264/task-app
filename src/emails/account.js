const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = ''

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ashutoshbshaha30@gmail.com',
        subject: 'Thanks for joining in!',
        text: 'We'
    })
}