import React, { PropsWithChildren } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { StyledCreateInvoiceForm } from './styles';
import Input from './Input';
import InvoiceItem from './InvoiceItem';
import DatePicker from './DatePicker';
import AddItemButton from './AddItemButton';
import useCreateInvoiceForm from './useCreateInvoiceForm';
import ActionButtons from './ActionButtons';

const CreateInvoiceForm: React.FC<PropsWithChildren> = () => {
  const {
    handleSubmit,
    onSubmit,
    register,
    control,
    formState: { errors },
    addItem,
    removeItem,
    fields,
    isTaxApplicable,
  } = useCreateInvoiceForm();

  return (
    <StyledCreateInvoiceForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        <legend>Bill From</legend>
      </div>
      <Input
        id='sender-street'
        labelText='Street Address'
        register={register('senderDetails.street')}
        error={Boolean(errors.senderDetails?.street)}
        placeholder='street-14, X Apartments'
      />
      <div className='stack'>
        <Input
          id='sender-city'
          labelText='City'
          register={register('senderDetails.city')}
          error={Boolean(errors.senderDetails?.city)}
          placeholder='Hyderabad'
        />
        <Input
          id='sender-post-code'
          labelText='Post Code'
          register={register('senderDetails.postCode')}
          error={Boolean(errors.senderDetails?.postCode)}
          placeholder='50001'
        />
        <Input
          id='sender-country'
          labelText='Country'
          register={register('senderDetails.country')}
          error={Boolean(errors.senderDetails?.country)}
          placeholder='India'
        />
      </div>
      <div>
        <legend>Bill To</legend>
      </div>
      <Input
        id='client-name'
        labelText="Client's Name"
        register={register('clientDetails.name')}
        error={Boolean(errors.clientDetails?.name)}
        placeholder='Joe'
      />
      <Input
        id='client-email'
        labelText="Client's Email"
        register={register('clientDetails.email')}
        error={Boolean(errors.clientDetails?.email)}
        placeholder='joe@email.com'
      />
      <Input
        id='client-street'
        labelText='Street Address'
        register={register('clientDetails.street')}
        error={Boolean(errors.clientDetails?.street)}
        placeholder='cross-7, Hyderabad'
      />

      <div className='stack'>
        <Input
          id='client-city'
          labelText='City'
          register={register('clientDetails.city')}
          error={Boolean(errors.clientDetails?.city)}
          placeholder='Hyderabad'
        />
        <Input
          id='client-post-code'
          labelText='Post Code'
          register={register('clientDetails.postCode')}
          error={Boolean(errors.clientDetails?.postCode)}
          placeholder='50010'
        />
        <Input
          id='client-country'
          labelText='Country'
          register={register('clientDetails.country')}
          error={Boolean(errors.clientDetails?.country)}
          placeholder='India'
        />
      </div>
      <div className='stack'>
        <DatePicker
          control={control}
          name='createdAt'
          id='invoice-date'
          labelText='Invoice Date'
        />
        <DatePicker
          control={control}
          name='paymentDue'
          id='payment-due'
          labelText='Payment Due'
        />
      </div>
      <Input
        id='description'
        labelText='Description'
        register={register('description')}
        error={Boolean(errors.description)}
        placeholder='Website performance optimization'
      />
      <div className='tax-applicable'>
        <input
          type='checkbox'
          id='tax-applicable'
          {...register('taxApplicable')}
        />
        <label htmlFor='tax-applicable'>Tax Applicable</label>
      </div>
      <legend>Item List</legend>
      <AddItemButton addItem={addItem} />
      {fields.map(({ id }, index) => (
        <InvoiceItem
          key={id}
          index={index}
          register={register}
          remove={removeItem}
          taxApplicable={isTaxApplicable}
        />
      ))}
      <ActionButtons />
    </StyledCreateInvoiceForm>
  );
};

export default CreateInvoiceForm;
