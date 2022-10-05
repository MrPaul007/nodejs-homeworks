const { RequestError } = require("../helpers");

const validateBody = schema => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(RequestError(400, "Помилка від Joi або іншої бібліотеки валідації"));
    }
    next();
  };

  return func;
};

module.exports = validateBody;
