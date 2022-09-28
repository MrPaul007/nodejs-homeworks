const { Contact } = require("../../models/contacts");

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  console.log(req.body.favorite);
  if (!result) {
    res.status(404).json({ message: "not found" });
  }
  res.json(result);
};

module.exports = updateFavorite;
