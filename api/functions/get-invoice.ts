import verifyJwt from '../lib/verify-jwt';
import connectToDb from '../lib/fauna';
import { HandlerEvent } from '@netlify/functions';

const {
  client,
  query: { Get, Ref, Collection },
} = connectToDb();

interface IncomingData {
  ref: {
    id: string;
  };
  data: { [key: string]: unknown };
}

export const handler = verifyJwt(async (event: HandlerEvent) => {
  const id = event.rawQuery.split('=')[1];
  if (!id) {
    return {
      statusCode: 400,
    };
  }
  const data: IncomingData = await client.query(
    Get(Ref(Collection('invoices'), id)),
  );

  const invoice = {
    id: data.ref.id,
    ...data.data,
  };

  // console.log(data);
  return {
    statusCode: 200,
    body: JSON.stringify(invoice),
  };
});
