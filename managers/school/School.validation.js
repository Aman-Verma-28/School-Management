const Joi = require("joi");

module.exports = {
    createSchool: Joi.object({
        name: Joi.string().required(),
        address: Joi.string().required(),
        contact: Joi.string().required(),
        adminId: Joi.string().required(),
    }),
};
