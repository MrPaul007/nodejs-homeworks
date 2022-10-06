const Jimp = require("jimp");

const resizeImage = async image => {
  Jimp.read(image)
    .then(img => {
      return img.resize(250, 250).write(image);
    })
    .catch(err => {
      console.error("resizeError: ", err);
    });
};

module.exports = resizeImage;
