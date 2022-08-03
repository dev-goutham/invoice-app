import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const StyledLayout = styled.div`
  position: relative;
  main {
    ${breakpoint('mobile', 'tablet')`
      padding-top: 90px
    `};

    ${breakpoint('tablet')`
      padding-left: 100px
    `};
  }
`;

export default StyledLayout;
