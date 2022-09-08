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
    getInvoices: builder.query<
      Invoice[],
      { token: string; filterBy?: 'all' | 'due' | 'paid' }
    >({
      query: ({ token, filterBy = 'all' }) => ({
        url: `/get-invoices?status=${filterBy}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: (result) =>
        result
          ? result.map((invoice) => ({ type: 'Invoices', id: invoice.id }))
          : ['Invoices'],
    }),
    createInvoice: builder.mutation<
      unknown,
      { token: string; invoice: Invoice }
    >({
      query: (args) => ({
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
    getInvoice: builder.query<Invoice, { token: string; id: string }>({
      query: (args) => ({
        url: `/get-invoice?id=${args.id}`,
        headers: {
          Authorization: `Bearer ${args.token}`,
        },
      }),
      providesTags: (result) =>
        result ? [{ type: 'Invoices', id: result.id }] : ['Invoices'],
    }),
    updateInvoice: builder.mutation<
      Invoice,
      { token: string; invoice: Invoice; id: string }
    >({
      query: (args) => ({
        url: `/update-invoice?id=${args.id}`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${args.token}`,
        },
        body: {
          invoice: args.invoice,
        },
      }),
      invalidatesTags: (result) =>
        result ? [{ type: 'Invoices', id: result.id }] : ['Invoices'],
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
