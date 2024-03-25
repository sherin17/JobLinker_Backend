const nodemailer = require('nodemailer');
const express  = require('express')
const router = express.Router()
router.post('/jobseekermail', async(req,res)=>{
  console.log(req.body.data.feedback, req.body.email, req.body.name )
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sherinthomasvc@gmail.com',
      pass: 'jskljtliblyszkno' 
    }
  });
  const mailOptions = {
    from: 'sherinthomasvc@gmail.com',
    to: req.body.email,
    subject: 'Job Portal Update',
    text: ` This is very important mail from admin 
            Dear ${req.body.name}
            ${req.body.data.feedback}
            from  admin, thanks for registering`
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
    console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
   res.send('successfully mailed')

})
module.exports = router
