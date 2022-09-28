const { Contact } = require("../../models/contacts");

const remove = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    return res.status(404).json({ message: "Not found" });
  }
  res.json({
    message: "Contact deleted"
  });
};

module.exports = remove;
