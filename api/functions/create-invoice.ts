import { HandlerContext, HandlerEvent } from '@netlify/functions';
import verifyJwt from '../lib/verify-jwt';
import connectToDb from '../lib/fauna';

export const handler = verifyJwt(
  async (
    event: HandlerEvent,
    context: HandlerContext & { identityContext: { claims: { sub: string } } },
  ) => {
    if (event.httpMethod === 'POST') {
      const {
        claims: { sub },
      } = context.identityContext;
      const id = sub.split('|')[1];

      const body = event.body as unknown as any;
      const { invoice } = JSON.parse(body) as {
        invoice: any;
      };

      const {
        client,
        query: { Create, Collection },
      } = connectToDb();

      const doc = await client.query(
        Create(Collection('invoices'), {
          data: {
            ...invoice,
            userId: id,
          },
        }),
      );

      return {
        statusCode: 201,
        body: JSON.stringify(doc),
      };
    } else {
      return {
        statusCode: 400,
      };
    }
  },
);
