import styled from 'styled-components';

const StyledAuthenticate = styled.div`
  max-height: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    margin: auto;
    width: 300px;
    background-color: var(--color-bg-secondary);
    border-radius: 8px;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.35);

    .google-login {
      margin: 25px auto;
      background-color: #4285f4;
      color: white;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border: none;
      gap: 10px;
      width: 70%;
      border-radius: 3px;
      cursor: pointer;
      padding: 0;
      box-shadow: 5px 5px 20px 0px rgba(66, 133, 244, 0.4);
      .image-container {
        background-color: white;
        height: 32px;
        width: 40px;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        padding: 8px;
        img {
          height: 100%;
          width: 100%;
        }
      }
      span {
        font-weight: bold;
      }
      & > * {
        display: inline-block;
      }
    }
  }
`;

export default StyledAuthenticate;
