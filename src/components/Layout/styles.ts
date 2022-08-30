import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const StyledLayout = styled.div`
  position: relative;
  main {
    * {
      max-width: 650px;
    }

    ${breakpoint('mobile', 'tablet')`
      padding: 32px 24px 56px 24px;
    `};

    ${breakpoint('tablet', 'desktop')`
      padding: 56px 48px;
      margin-left: 90px;
    `};

    ${breakpoint('desktop')`
      padding: 72px 56px;
      margin-left: 90px;
    `}
  }
`;

export const StyledNavbar = styled.nav`
  background-color: var(--color-bg-secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${breakpoint('mobile', 'tablet')`
    left: 0;
    right: 0;
    top: 0;
    flex-direction: row;
    `}

  ${breakpoint('tablet')`
    position: fixed;
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

  .theme-toggle {
    background-color: transparent;
    border: none;
    outline: none;
    color: inherit;
    cursor: pointer;
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

export const StyledPageWrapper = styled.div`
  margin: 0 auto;
  & > * {
    margin: 30px 0;
  }
`;
