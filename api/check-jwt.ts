import { expressjwt as jwt } from 'express-jwt';
import jwksRsa from 'jwks-rsa';

const domain = process.env.VITE_AUTH0_DOMAIN;
const audience = process.env.AUTH0_AUDIENCE;

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}/.well-known/jwks.json`,
  }) as jwksRsa.GetVerificationKey,
  audience: audience,
  issuer: `https://${domain}/`,
  algorithms: ['RS256'],
});

module.exports = {
  checkJwt,
};
