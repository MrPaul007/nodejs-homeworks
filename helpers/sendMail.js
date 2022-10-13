const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY, EMAIL_ADDRESS } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendMail = async data => {
  const mail = { ...data, from: EMAIL_ADDRESS };
  await sgMail.send(mail);
  return true;
};

module.exports = sendMail;
