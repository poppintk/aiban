const nodemailer = require('nodemailer')

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    // host: 'smtp.ethereal.email',
    service: 'gmail', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
    port: 465, // SMTP 端口
    secureConnection: true, // 使用了 SSL
    auth: {
        user: 'hnabzm.service@gmail.com',
        pass: 'nullnull',
    }
});

const send = ({ email, phone, text,subject }) => {
  const from = phone && email ? `${phone} <${email}>` : `${phone || email}`
  const message = {
    from,
    to: '1317426180@QQ.com',
    subject: `邮件来自 ${from}  主题： ${subject}`,
    text,
    replyTo: from
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

module.exports = send