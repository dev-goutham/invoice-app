import { useState } from 'react';
import { Invoice } from '../../../typings/Invoice';

const useSelected = () => {
  const [selected, setSelected] = useState<Invoice['status'] | null>(null);

  const isSelected = (value: Invoice['status']) => selected === value;

  const select = (value: Invoice['status']) => {
    setSelected(value);
  };

  return { selected, isSelected, select };
};

export default useSelected;
