const fs = require("fs/promises");
const path = require("path");

const { User } = require("../../models/user");
const { resizeImage } = require("../../helpers");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id } = req.user;
  const extention = originalname.split(".").pop();
  const fileName = `${_id}.${extention}`;
  const resultUpload = path.join(avatarsDir, fileName);
  await fs.rename(tempUpload, resultUpload);
  await resizeImage(resultUpload);
  const avatarURL = path.join("avatars", fileName);
  await User.findByIdAndUpdate(_id, { avatarURL });
  res.json({
    avatarURL
  });
};

module.exports = updateAvatar;
