import nodemailer from "nodemailer"
import { FROM, TO, PASS } from "./secret.js"

const transporter = nodemailer.createTransport({
  host: "smtp.yandex.ru",
  port: 465,
  secure: true,
  auth: {
    user: FROM,
    pass: PASS
  }
});

export const send = (name, telegram, origin) => {
  const mailOptions = {
    from: FROM,
    to: TO,
    subject: 'Новая заявка',
    text: '',
    html: `
       <h1>Новая заявка (${origin})</h1>
       <p>Имя: <b>${name}</b></p>
       <p>Телеграм: <b>${telegram}</b></p>
    `
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Ошибка при отправке:', error)
    } else {
      console.log('Письмо отправлено:', info.response)
    }
  })
}
