import React, { forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { Control, Controller } from 'react-hook-form';
import { Invoice } from '../../typings/Invoice';
import { StyledDatePicker } from './styles';

interface Props {
  control: Control<Invoice, unknown>;
  name: 'invoiceDate' | 'poDate';
  id: string;
  labelText: string;
}

const DatePicker: React.FC<Props> = ({ control, name, id, labelText }) => {
  return (
    <StyledDatePicker>
      <label htmlFor={id}>{labelText}</label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <ReactDatePicker
            id={id}
            selected={value}
            dateFormat='dd-MM-yyyy'
            onChange={onChange}
            customInput={React.createElement(CustomInput)}
            wrapperClassName='date-picker'
            calendarClassName='header'
          />
        )}
      />
    </StyledDatePicker>
  );
};

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef<
  HTMLButtonElement,
  {
    value: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  }
>(({ onClick, value }, ref) => {
  return (
    <button className='btn' ref={ref} onClick={onClick}>
      <span>{value}</span>
      <span>
        <BsFillCalendarEventFill />
      </span>
    </button>
  );
});

export default DatePicker;
