import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const invoiceApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
  }),
  tagTypes: ['Invoices'],
  endpoints: (builder) => ({
    getInvoices: builder.query({
      query: (token: string) => ({
        url: `/get-invoices`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['Invoices'],
    }),
    createInvoice: builder.mutation({
      query: (args: { token: string; invoice: any }) => ({
        url: '/create-invoice',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${args.token}`,
        },
        body: {
          invoice: args.invoice,
        },
      }),
      invalidatesTags: ['Invoices'],
    }),
    getInvoice: builder.query({
      query: (args: { token: string; id: string }) => ({
        url: `/get-invoice?id=${args.id}`,
        headers: {
          Authorization: `Bearer ${args.token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetInvoicesQuery,
  useLazyGetInvoicesQuery,
  useCreateInvoiceMutation,
  useGetInvoiceQuery,
  useLazyGetInvoiceQuery,
} = invoiceApi;

export default invoiceApi;
