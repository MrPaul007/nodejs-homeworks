const { getContactById } = require("../../models/contacts");

const getById = async(req, res) => {
    const { contactId } = req.params;
    const result = await getContactById(contactId);
    if (!result) {
        return res.status(404).json({message: "Not found"})
    };
    res.json(result)
};

module.exports = getById;