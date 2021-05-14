const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const sendWelcomeEmail = (email,name)=>{
        sgMail.send({
            to:email,
            from: 'anaglateafua@gmail.com',
            subject: 'Welcome to me! Thanks for joining in',
            text: 'Welcome to the app,'+name+'.Let me know how you get along with the app!' 
        })
    }
    const sendCancelEmail = (email,name)=>{
        sgMail.send({
            to:email,
            from: 'anaglateafua@gmail.com',
            subject: 'Delete Account Confirmation!',
            text: 'Welcome to the app,'+name+'.Let me know how you get along with the app!' 
        })
    }
    module.exports = {
        sendWelcomeEmail,
        sendCancelEmail
    }
    
    // sgMail.send({
    //     to:'anaglateafua@gmail.com',
    //     from: 'anaglateafua@gmail.com',
    //     subject: 'this is it!',
    //     text: 'I hope this is fine.'
    // }).then((d)=>{
    //     console.log(d)
    // }).catch((e)=>{
    //     console.log(e.response.body)
   // })
   