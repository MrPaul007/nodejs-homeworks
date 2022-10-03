const { Schema, SchemaTypes, model } = require("mongoose");
const Joi = require("Joi");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"]
    },
    email: {
      type: String
    },
    phone: {
      type: String
    },
    favorite: {
      type: Boolean,
      default: false
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "user"
    }
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("contact", contactSchema);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean()
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required()
});

const schemas = {
  addSchema,
  updateFavoriteSchema
};

module.exports = {
  schemas,
  Contact
};
