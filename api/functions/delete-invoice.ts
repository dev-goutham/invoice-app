import { HandlerEvent } from '@netlify/functions';
import verifyJwt from '../lib/verify-jwt';
import connectToDb from '../lib/fauna';

const {
  client,
  query: { Collection, Delete, Ref },
} = connectToDb();

export const handler = verifyJwt(async (event: HandlerEvent) => {
  if (event.httpMethod === 'DELETE') {
    const id = event.rawQuery.split('=')[1];

    const res = await client.query(Delete(Ref(Collection('invoices'), id)));

    return {
      statusCode: 201,
      body: JSON.stringify(res),
    };
  } else {
    return {
      statusCode: 400,
    };
  }
});
