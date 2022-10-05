const { Contact } = require("../../models/contacts");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.find({ owner }, "-createdAt -updatedAt").populate("owner", "_id email subscription");
  res.json(result);
};

module.exports = getAll;
