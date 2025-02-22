const Joi = require("joi");

module.exports = {
    createClassroom: Joi.object({
        name: Joi.string().required(),
        capacity: Joi.number().integer().min(1).required(),
        resources: Joi.array().items(Joi.string()), // Example: ["Projector", "Whiteboard"]
        schoolId: Joi.string().required(),
    }),
};
