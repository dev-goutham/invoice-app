import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const StyledNavbar = styled.nav`
  position: fixed;
  background-color: var(--color-bg-secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${breakpoint('mobile', 'tablet')`
    left: 0;
    right: 0;
    flex-direction: row; 
  `}

  ${breakpoint('tablet')`
    top: 0;
    bottom: 0;
    flex-direction: column;
  `}

  .logo img {
    ${breakpoint('mobile', 'tablet')`
      height: 75px;
    `}
    ${breakpoint('tablet')`
      height: 100px;
    `}
  }

  svg {
    font-size: 1.75rem;
    ${breakpoint('mobile', 'tablet')`
      margin-right: 20px;
    `}
    ${breakpoint('tablet')`
      margin-bottom: 20px;
    `}
  }
`;

export default StyledNavbar;
