import { Handler } from '@netlify/functions';
import verifyJwt from '../lib/verify-jwt';

export const handler: Handler = verifyJwt(async (event, context) => {
  const {
    claims: { sub },
  } = context.identityContext;

  const id = sub.split('|')[1];
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'GET',
    },
    body: JSON.stringify({ id }),
  };
});
