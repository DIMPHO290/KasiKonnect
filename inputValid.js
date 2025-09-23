const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^\+27\d{9}$/).required(), // Example: South African format
  idNumber: Joi.string().length(13).pattern(/^[0-9]+$/).required(), // SA ID = 13 digits
});
