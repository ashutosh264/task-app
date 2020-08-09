const sgMail = require('@sendgrid/mail')

//const mailChimpAPIKey = '583882c9330d9e4e052fca09abd33b67-us17'

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