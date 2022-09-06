import * as yup from 'yup';

const schema = yup.object().shape({
  invoiceNumber: yup.number().required(),
  createdAt: yup.date().required(),
  paymentDue: yup.date().required(),
  description: yup.string().required(),
  taxApplicable: yup.boolean().default(false),
  status: yup.string().oneOf(['due', 'paid', 'draft']).default('due'),
  clientDetails: yup.object().when('taxApplicable', {
    is: (val: boolean) => !val,
    then: yup.object().shape({
      name: yup.string().required(),
      email: yup.string().required().email(),
      street: yup.string().required(),
      city: yup.string().required(),
      postCode: yup.string().required(),
      country: yup.string().required(),
    }),
    otherwise: yup.object().shape({
      name: yup.string().required(),
      email: yup.string().required().email(),
      street: yup.string().required(),
      city: yup.string().required(),
      postCode: yup.string().required(),
      country: yup.string().required(),
      taxRegistrationNumber: yup.string().required(),
    }),
  }),
  senderDetails: yup.object().when('taxApplicable', {
    is: (val: boolean) => !val,
    then: yup.object().shape({
      street: yup.string().required(),
      city: yup.string().required(),
      postCode: yup.string().required(),
      country: yup.string().required(),
    }),
    otherwise: yup.object().shape({
      street: yup.string().required(),
      city: yup.string().required(),
      postCode: yup.string().required(),
      country: yup.string().required(),
      taxRegistrationNumber: yup.string().required(),
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
