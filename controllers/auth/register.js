const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const { User } = require("../../models/user");
const { RequestError, sendMail } = require("../../helpers");
const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { password, email, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();
  const result = await User.create({ password: hashPassword, email, subscription, avatarURL, verificationToken });
  const mail = {
    to: email,
    subject: "Please, confirm you email",
    html: `<a href="${BASE_URL}/users/verify/${verificationToken}">Confirm</>`
  };

  await sendMail(mail);

  res.status(201).json({
    email: result.email,
    subscription: result.subscription
  });
};

module.exports = register;
