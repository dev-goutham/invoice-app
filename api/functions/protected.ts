import { Handler } from '@netlify/functions';
import verifyJwt from '../verify-jwt';

export const handler: Handler = verifyJwt(async (event, context) => {
  const { claims } = context.identityContext;
  return {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Allow from anywhere
    },
    body: JSON.stringify(claims),
  };
});
