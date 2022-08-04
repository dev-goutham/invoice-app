import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const StyledLayout = styled.div`
  position: relative;
  main {
    * {
      max-width: 730px;
      margin: auto;
    }

    ${breakpoint('mobile', 'tablet')`
      padding: 32px 24px 56px 24px;
      margin-top: 80px;
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

export default StyledLayout;
