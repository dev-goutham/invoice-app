import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { StyledCreateInvoiceForm } from './styles';
import Input from './Input';
import InvoiceItem from './InvoiceItem';
import DatePicker from './DatePicker';
import AddItemButton from './AddItemButton';
import useCreateInvoiceForm from './hooks/useCreateInvoiceForm';
import ActionButtons from './ActionButtons';
import { DefaultValues, SubmitHandler } from 'react-hook-form';
import { Invoice } from '../../typings/Invoice';

const CreateInvoiceForm: React.FC<{
  initialValues?: DefaultValues<Invoice>;
  mode?: 'create' | 'update';
  onSubmit: SubmitHandler<Invoice>;
}> = ({ initialValues, mode = 'create', onSubmit }) => {
  const {
    register,
    control,
    formState: { errors },
    addItem,
    removeItem,
    fields,
    isTaxApplicable,
    watch,
    setValue,
    handleSubmit,
    reset,
  } = useCreateInvoiceForm(initialValues);

  return (
    <StyledCreateInvoiceForm onSubmit={handleSubmit(onSubmit)}>
      <div className='info'>
        <div>
          <Input
            id='invoice-number'
            labelText='Invoice Number'
            register={register('invoiceNumber')}
            error={Boolean(errors.invoiceNumber)}
            placeholder='1'
          />
        </div>
        <div className='checkbox'>
          <input
            type='checkbox'
            id='tax-applicable'
            {...register('taxApplicable')}
          />
          <label htmlFor='tax-applicable'>Tax Applicable</label>
        </div>
        {mode === 'update' && (
          <div className='select'>
            <label htmlFor='status'>Status</label>
            <select id='status' {...register('status')}>
              <option value={'paid'}>Paid</option>
              <option value={'due'}>Due</option>
            </select>
          </div>
        )}
      </div>
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
      {isTaxApplicable && (
        <div>
          <Input
            id='sender-taxnumber'
            labelText='GSTIN'
            register={register('senderDetails.taxRegistrationNumber')}
            placeholder='AGT4PXNMO356'
            error={Boolean(errors.senderDetails?.taxRegistrationNumber)}
          />
        </div>
      )}
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
      {isTaxApplicable && (
        <div>
          <Input
            id='client-taxnumber'
            labelText='GSTIN'
            register={register('clientDetails.taxRegistrationNumber')}
            placeholder='AGT4PXNMO356'
            error={Boolean(errors.clientDetails?.taxRegistrationNumber)}
          />
        </div>
      )}
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

      <legend>Item List</legend>
      <AddItemButton addItem={addItem} />
      {fields.map(({ id }, index) => (
        <InvoiceItem
          key={id}
          index={index}
          register={register}
          remove={removeItem}
          taxApplicable={isTaxApplicable}
          watch={watch}
          setValue={setValue}
        />
      ))}
      <ActionButtons reset={reset} />
    </StyledCreateInvoiceForm>
  );
};

export default CreateInvoiceForm;
