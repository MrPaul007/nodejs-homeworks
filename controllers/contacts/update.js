const { updateContact } = require("../../models/contacts");

const {RequestError} = require("../../helpers");

const update = async(req, res) => {
    const {contactId} = req.params;
    const result = await updateContact(contactId, req.body);
    if(!result) {
        throw RequestError(404, "Not found");
    }
    res.json(result);
};

module.exports = update;