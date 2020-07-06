var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var cors = require("cors");
const creds = require("./config");

var transport = {
  service: "gmail",
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("server ready");
  }
});



var mail = {
  from: "chungus",
  to: "APortfolioemail@gmail.com",
  subject: "New Message From Portfolio Site",
  text: "content"
};

transporter.sendMail(mail, (err, data) => {
    if(err) {
        console.log(err)
    } else {
        console.log(data)
    }
});

router.post("/send", (req, res, next) => {
  var name = req.body.name;
  var author = req.body.author;
  var email = req.body.email;
  var content = `name: ${name} \n email: ${author} \n message: ${email}`;

  var mail = {
    from: name,
    to: "APortfolioemail@gmail.com",
    subject: "New Message From Portfolio Site",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);
      res.json({
        status: "failed",
      });
    } else {
      console.log("yeees");
      res.json({
        status: "success",
      });
    }
  });
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3002);
