import React, { PropsWithChildren } from 'react';
import { StyledActionButtons } from './styles';

const ActionButtons: React.FC<PropsWithChildren> = () => {
  return (
    <StyledActionButtons>
      <div className='left'>
        <button className='discard'>Discard</button>
      </div>
      <div className='right'>
        <button className='draft'>Save as Draft</button>
        <button className='save' type='submit'>
          Save
        </button>
      </div>
    </StyledActionButtons>
  );
};

export default ActionButtons;
