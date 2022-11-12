import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: `${req.body.email}`,//"mannuarora7000@gmail.com", // Your email where you'll receive emails
      from: "edson.marcio7@gmail.com", // your website email address here
      subject: `${req.body.subject}`,
      html: `<div>Hi ${req.body.fullname}</div>
        <br/>
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjzYlXF9kTFy9-stBrESj1ohFAe-wbsQWM3ni5_9c69-gBUgjGN_9-mvTu4fNvw9pAgBzJ7qUIKGVbs_BQd-NJxB62-EPJmFROeS3rHxUCB6cmrWNRocaVwLTTA0a2tHVN4sa954tgf0AyEpQFAzgmBCcikA3XGIgP-EZ2Ly6o8b8CyvQcSvHYjdx-mQ/s400/og1_logo_v2.png" width={50} height={50} alt="" />
        <br/>
        <div>
          You are receiving this email for registering with OgHum.io
          <br/>
          Clink on the link to confirm registration.
          <br/>
          <a href='${req.body.token}'>Confirm register</a>
          <br/>
          If you did not register, please ignore this email.
        
        </div>
      
      `,
      
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;