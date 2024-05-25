import Joi from "joi";

export const postValidator = Joi.object({
    userId: Joi
        .number()
        .required()
        .min(0)
        .max(10)
        .messages({
            "number.required.base": "should be fill",
            "number.min.base": "min 5",
            "number.max.base": "max 10",
        }),

    id: Joi
        .number()
        .required()
        .min(0)
        .max(10)
        .messages({
            "number.required.base": "should be fill",
            "number.min.base": "min 5",
            "number.max.base": "max 10",
        }),

    title: Joi
        .string()
        .required()
        .length(5)
        .messages({
            "string.required.base": 'should be fill',
            "string.length.base": 'should has 5 signs'
        }),


    body: Joi
        .string()
        .required()
        .length(15)
        .messages({
            "string.required.base": 'should be fill',
            "string.length.base": 'should has 5 signs'
        })
})