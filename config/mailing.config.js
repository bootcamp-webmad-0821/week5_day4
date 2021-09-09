const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'germanwebmad0821@gmail.com',
        pass: 'popino2021'
    }
})

module.exports = transporter