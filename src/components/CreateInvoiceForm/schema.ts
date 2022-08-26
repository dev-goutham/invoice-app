import * as yup from 'yup';

const schema = yup.object().shape({
  createdAt: yup.date().required(),
  paymentDue: yup.date().required(),
  description: yup.string().required(),
  taxApplicable: yup.boolean().required(),
  clientDetails: yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    street: yup.string().required(),
    city: yup.string().required(),
    postCode: yup.string().required(),
    country: yup.string().required(),
    taxRegsitrationNumber: yup.string().when('taxApplicable', {
      is: true,
      then: yup.string().required(),
    }),
  }),
  senderDetails: yup.object().shape({
    street: yup.string().required(),
    city: yup.string().required(),
    postCode: yup.string().required(),
    country: yup.string().required(),
    taxRegsitrationNumber: yup.string().when('taxApplicable', {
      is: true,
      then: yup.string().required(),
    }),
  }),
  items: yup.array().of(
    yup.object().shape({
      name: yup.string().required(),
      quantity: yup.number().required(),
      price: yup.number().required().min(1),
      total: yup.number().required(),
      taxRate: yup.number().when('taxApplicable', {
        is: true,
        then: yup.number().required(),
      }),
    }),
  ),
});

export default schema;
