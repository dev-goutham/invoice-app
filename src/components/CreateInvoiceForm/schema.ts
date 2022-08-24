import { array, boolean, date, number, object, string } from 'yup';

const schema = object().shape({
  createdAt: date().required(),
  paymentDue: date().required(),
  description: string().required(),
  taxApplicable: boolean().required(),
  clientDetails: object().shape({
    name: string().required(),
    email: string().required().email(),
    street: string().required(),
    city: string().required(),
    postCode: string().required(),
    country: string().required(),
    taxRegsitrationNumber: string().when('taxApplicable', {
      is: true,
      then: string().required(),
    }),
  }),
  senderDetails: object().shape({
    street: string().required(),
    city: string().required(),
    postCode: string().required(),
    country: string().required(),
    taxRegsitrationNumber: string().when('taxApplicable', {
      is: true,
      then: string().required(),
    }),
  }),
  items: array().of(
    object().shape({
      name: string().required(),
      quantity: number().required(),
      price: number().required().min(1),
      total: number().required(),
      taxRate: number().when('taxApplicable', {
        is: true,
        then: number().required(),
      }),
    }),
  ),
});

export default schema;
