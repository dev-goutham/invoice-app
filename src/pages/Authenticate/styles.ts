import styled from 'styled-components';

const StyledAuthenticate = styled.div`
  max-height: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    margin: auto;
    width: 230px;
    background-color: var(--color-bg-secondary);
    border-radius: 8px;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.35);

    button {
      display: block;
      margin: 25px auto;
      width: 70%;
      padding: 16px 0;
      border-radius: 8px;
      border: none;
      font-weight: bold;
      background-color: var(--color-bg-primary);
      color: white;
      cursor: pointer;
      box-shadow: 10px 7px 15px 0px rgba(0, 0, 0, 0.35);
      &:first-of-type {
        background-color: var(--color-brand);
      }
    }
  }
`;

export default StyledAuthenticate;
