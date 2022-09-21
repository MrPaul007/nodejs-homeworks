const express = require('express')

const ctrl = require("../../controllers/contacts");

const {ctrlWrapper} = require("../../helpers")

const validateBody = require("../../middlewares");

const addSchema = require("../../schemas");

const router = express.Router()

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post('/', validateBody(addSchema), ctrlWrapper(ctrl.add));

router.delete('/:contactId', ctrlWrapper(ctrl.remove));

router.put('/:contactId', validateBody(addSchema), ctrlWrapper(ctrl.update));

module.exports = router;