import { body } from 'express-validator';

export const loginRules = 

[
  body('email')
    .isEmail()
    .withMessage('Email must be valid'),
  body('password')
    .trim()
    .isLength({ min: 4, max: 40})
    .withMessage('Password must be 4-40 charachter long')
]

