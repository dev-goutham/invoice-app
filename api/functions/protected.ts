import { Handler } from '@netlify/functions';
import verifyJwt from '../verify-jwt';

export const handler: Handler = verifyJwt(async (event, context) => {
  const { claims } = context.identityContext;
  return {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'GET',
    },
    body: JSON.stringify(claims),
  };
});
