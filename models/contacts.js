const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "contacts.json");

const updateContactsList = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
}

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async contactId => {
  const contacts = await listContacts();
  const result = contacts.find(item => item.id === contactId);
  console.log(result || null);
  return result || null;
};

const addContact = async ({ name, email, phone }) => {
  const list = await listContacts();
  const newList = [...list, { id: v4(), name, email, phone }];
  updateContactsList(newList);
}

const removeContact = async (id) => {
  const list = await listContacts();

  const index = list.findIndex(item => item.id === id);
  if(index === -1){
    return null;
  }
  const result = list.splice(index, 1);
  await updateContactsList(list);
  return result;
}


const updateContact = async (contactId, {name, email, phone}) => {
  const list = await listContacts();
    const index = list.findIndex(item => item.id === contactId);
    if(index === -1){
        return null;
    }
    list[index] = {contactId, name, email, phone};
    await updateContactsList(list);
    return list[index];
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact
}
