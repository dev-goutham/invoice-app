import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const StyledAvatar = styled.div`
  position: relative;
  .avatar {
    display: block;
    cursor: pointer;
    background-color: transparent;
    border: none;
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
  }
`;

export const StyledAvatarDropDown = styled.button`
  position: absolute;
  width: 100px;
  height: 50px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  background-color: rgb(236, 87, 87);
  border-radius: 8px;
  box-shadow: 10px 7px 15px 0px rgba(0, 0, 0, 0.35);
  border: none;
  top: 45px;
  right: -25px;

  ${breakpoint('tablet')`
    left: 53px;
    top: -6px;
  `}
`;
