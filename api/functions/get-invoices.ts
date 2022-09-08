import { Handler, HandlerEvent } from '@netlify/functions';
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

export const handler: Handler = verifyJwt(
  async (event: HandlerEvent, context) => {
    const {
      claims: { sub },
    } = context.identityContext;

    const userId = sub.split('|')[1];

    const status = event.rawQuery.split('=')[1];

    let data: IncomingData['data'];

    if (status === 'paid' || status === 'due') {
      const result = (await client.query(
        Map(
          Paginate(
            Match(Index('invoices_by_user_id_status'), [status, userId]),
          ),
          (ref) => Get(ref),
        ),
      )) as IncomingData;
      data = result.data;
    } else {
      const result = (await client.query(
        Map(Paginate(Match(Index('invoices_by_user'), userId)), (ref) =>
          Get(ref),
        ),
      )) as IncomingData;
      data = result.data;
    }

    const invoices = data.map((item) => ({
      id: item.ref.id,
      ...item.data,
    }));

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
  },
);
