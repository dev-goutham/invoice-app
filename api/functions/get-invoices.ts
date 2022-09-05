import { Handler } from '@netlify/functions';
import verifyJwt from '../lib/verify-jwt';
import connectToDb from '../lib/fauna';

const {
  client,
  query: { Paginate, Match, Index, Map, Get },
} = connectToDb();

export const handler: Handler = verifyJwt(async (event, context) => {
  const {
    claims: { sub },
  } = context.identityContext;

  const userId = sub.split('|')[1];

  const invoices = await client.query(
    Map(Paginate(Match(Index('invoices_by_user'), userId)), (ref) => Get(ref)),
  );

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'GET',
    },
    body: JSON.stringify({ invoices }),
  };
});
