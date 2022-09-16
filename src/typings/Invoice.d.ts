export interface Invoice {
  id: string;
  invoiceNumber: number;
  invoiceDate: Date;
  poNumber?: string;
  poDate?: Date;
  description: string;
  taxApplicable: boolean;
  userId: string;
  clientDetails: Details;
  senderDetails: Omit<Details, 'name' | 'email'>;
  status: 'paid' | 'due';
  items: InvoiceItem[];
  total: number;
}

interface Details {
  name: string;
  email: string;
  street: string;
  city: string;
  postCode: string;
  country: string;
  taxRegistrationNumber?: string;
}

interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
  taxRate?: number;
  totalAfterTax: number;
}
