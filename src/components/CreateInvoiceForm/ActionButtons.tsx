import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledActionButtons } from './styles';

const ActionButtons: React.FC<{ reset: () => void }> = ({ reset }) => {
  const navigate = useNavigate();
  const discard = () => {
    reset();
    navigate('/');
  };

  return (
    <StyledActionButtons>
      <div className='left'>
        <button onClick={discard} className='discard'>
          Discard
        </button>
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
