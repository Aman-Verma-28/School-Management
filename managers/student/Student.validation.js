const Joi = require("joi");

module.exports = {
    enrollStudent: Joi.object({
        name: Joi.string().required(),
        age: Joi.number().integer().min(5).max(100).required(),
        enrolledIn: Joi.string().required(), // Classroom ID
        schoolId: Joi.string().required(), // School ID
    }),
};
