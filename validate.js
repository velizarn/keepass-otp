const speakeasy = require('speakeasy');

const {
  __TOTP_SECRET: secret,
  __TOTP_ENCODING: encoding = 'base32',
  __TOTP_ALGORITHM: algorithm = 'sha256',
  __TOTP_WINDOW: window = 1,
  __TOTP_STEP: step = 30,
  __TOTP_DIGITS: digits = 6
} = process.env;

const token = process.argv[2];

/**
 * Validate a TOTP token
 *
 * @param {string} token - The actual token to validate
 * @param {string} secret - The secret key used to generate the token
 * @param {string} encoding - The encoding used for the secret key
 * @param {string} algorithm - The algorithm used to generate the token
 * @param {number} window - The allowable time drift in seconds
 * @param {number} step - The time step in seconds
 * @param {number} digits - The number of digits in the token
 * @returns {boolean} - Whether the token is valid
 */
const isValidToken = speakeasy.totp.verify({
  token, // the actual token to validate
  secret,
  encoding,
  algorithm,
  window,
  step,
  digits
});

console.log('TOTP token to validate:', token);
console.log('Is the token valid?', isValidToken);
