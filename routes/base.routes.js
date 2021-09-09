const router = require("express").Router()
const transporter = require('./../config/mailing.config')



router.get("/", (req, res, next) => res.render("index"))



router.get("/contacto", (req, res, next) => res.render("contact-form"))
router.post("/contacto", (req, res, next) => {

  const { name, subject, to, text } = req.body

  transporter
    .sendMail({
      from: `Contacto web ${name} <myawesome@gmail.com>`,
      to,
      subject,
      text,
      html: `<b>${text}</b>`
    })
    .then(info => res.send(info))
    .catch(error => console.log(error))

})

module.exports = router