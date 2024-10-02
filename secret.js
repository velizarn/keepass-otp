const speakeasy = require('speakeasy');

const {
  __TOTP_SECRET_LENGTH: secretLength = 32,
  __TOTP_ENCODING: encoding = 'base32',
  __TOTP_ALGORITHM: algorithm = 'sha256'
} = process.env;

const label = process.argv[2];

const secret = speakeasy.generateSecret({ length: parseInt(secretLength) });

/**
 * Generate a TOTP URL
 *
 * @param {string} secret - The secret key used to generate the token
 * @param {string} label - The label for the account
 * @param {string} algorithm - The algorithm used to generate the token
 * @returns {string} - The TOTP URL
 */
var oauthUrl = speakeasy.otpauthURL({
  secret: secret[encoding],
  label,
  algorithm
});

console.log('Generated TOTP url:', oauthUrl);
