import verifyJwt from '../lib/verify-jwt';
import connectToDb from '../lib/fauna';
import { HandlerContext, HandlerEvent } from '@netlify/functions';

const {
  client,
  query: { Get, Ref, Collection },
} = connectToDb();

export const handler = verifyJwt(
  async (event: HandlerEvent, context: HandlerContext) => {
    const id = event.rawQuery.split('=')[1];
    if (!id) {
      return {
        statusCode: 400,
      };
    }
    const invoice = await client.query(Get(Ref(Collection('invoices'), id)));
    return {
      statusCode: 200,
      body: JSON.stringify(invoice),
    };
  },
);
