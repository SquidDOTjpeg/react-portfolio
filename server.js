require("dotenv").config();
var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var cors = require("cors");
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const root = path.join(__dirname, "/build");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(root));

app.get("*", function (req, res) {
  res.sendFile("/index.html", { root });
});

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
    console.log("Transporter is ready");
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

app.use(express.json());
app.use("/", router);
app.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});
