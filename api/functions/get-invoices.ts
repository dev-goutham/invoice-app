import { Handler } from '@netlify/functions';
import verifyJwt from '../lib/verify-jwt';
import connectToDb from '../lib/fauna';

interface IncomingData {
  data: {
    ref: {
      id: string;
    };
    data: { [key: string]: unknown };
  }[];
}

const {
  client,
  query: { Paginate, Match, Index, Map, Get },
} = connectToDb();

export const handler: Handler = verifyJwt(async (event, context) => {
  const {
    claims: { sub },
  } = context.identityContext;

  const userId = sub.split('|')[1];

  const { data }: IncomingData = await client.query(
    Map(Paginate(Match(Index('invoices_by_user'), userId)), (ref) => Get(ref)),
  );

  const invoices = data.map((item) => ({
    id: item.ref.id,
    ...item.data,
  }));
  console.log(invoices);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'GET',
    },
    body: JSON.stringify(invoices),
  };
});
