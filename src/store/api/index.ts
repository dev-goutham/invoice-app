import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Invoice } from '../../typings/Invoice';

const invoiceApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/.netlify/functions',
    // baseUrl: '/api/',
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
    updateInvoice: builder.mutation({
      query: (args: { token: string; invoice: Invoice; id: string }) => ({
        url: `/update-invoice?id=${args.id}`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${args.token}`,
        },
        body: {
          invoice: args.invoice,
        },
      }),
    }),

    deleteInvoice: builder.mutation({
      query: (args: { token: string; id: string }) => ({
        url: `delete-invoice?id=${args.id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${args.token}`,
        },
      }),
      invalidatesTags: ['Invoices'],
    }),
  }),
});

export const {
  useGetInvoicesQuery,
  useLazyGetInvoicesQuery,
  useCreateInvoiceMutation,
  useGetInvoiceQuery,
  useLazyGetInvoiceQuery,
  useUpdateInvoiceMutation,
  useDeleteInvoiceMutation,
} = invoiceApi;

export default invoiceApi;
