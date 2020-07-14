require("dotenv").config()
var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var cors = require("cors");
const PORT = process.env.PORT || 3002 
const bodyParser = require("body-parser")
const path = require("path")
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

console.log(process.env.USER)
console.log(process.env.PASS)

var transport = {
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
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

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.use(express.json());
// app.use("/", router);
app.listen(PORT);
