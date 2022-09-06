import verifyJwt from '../lib/verify-jwt';
import connectToDb from '../lib/fauna';
import { HandlerContext, HandlerEvent } from '@netlify/functions';
import { Invoice } from '../../src/typings/Invoice';

const {
  client,
  query: { Update, Ref, Collection },
} = connectToDb();

export const handler = verifyJwt(async (event: HandlerEvent, context) => {
  const id = event.rawQuery.split('=')[1];
  if (!id) {
    return {
      statusCode: 400,
    };
  }

  const {
    claims: { sub },
  } = context.identityContext;

  const userId = sub.split('|')[1];

  const { invoice } = JSON.parse(event.body!) as { invoice: Invoice };
  if (!invoice.userId || invoice.userId !== userId) {
    return {
      statusCode: 401,
    };
  }

  const res = await client.query(
    Update(Ref(Collection('invoices'), id), {
      data: invoice,
    }),
  );

  console.log(res);

  return {
    statusCode: 200,
    body: JSON.stringify(res),
  };
});
