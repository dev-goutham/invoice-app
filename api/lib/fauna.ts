import { Client, query } from 'faunadb';

const connectToDb = () => {
  const client = new Client({
    secret: process.env.FAUNADB_SECRET!,
  });

  return { client, query };
};

export default connectToDb;
