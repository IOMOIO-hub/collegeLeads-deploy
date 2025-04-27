import nodemailer from "nodemailer"
import { FROM, TO, PASS } from "./secret"

const transporter = nodemailer.createTransport({
  host: "smtp.yandex.ru",
  port: 465,
  secure: true,
  auth: {
    user: FROM,
    pass: PASS
  }
});

export const send = (name, tel) => {
  const mailOptions = {
    from: FROM,
    to: TO,
    subject: 'Новая заявка на uralcollege.ru',
    text: '',
    html: `
       <h1>Новая заявка на uralcollege.ru</h1>
       <p>Имя: <b>${name}</b></p>
       <p>Телефон: <b>${tel}</b></p>`
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Ошибка при отправке:', error)
    } else {
      console.log('Письмо отправлено:', info.response)
    }
  })
}
