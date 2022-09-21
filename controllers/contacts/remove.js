const { removeContact } = require("../../models/contacts");

const remove = async(req, res) => {
    const {contactId} = req.params;
    const result = await removeContact(contactId);
    if(!result) {
        return res.status(404).json({message: "Not found"})    }
    res.json({
        message: "Contact deleted"
    });
};

module.exports = remove;