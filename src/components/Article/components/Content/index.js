import styled from 'styled-components';

export default styled.div`
  line-height: 1.4;
  font-size: ${({ theme }) => theme.font.sizes.content.sm};
  @media (${({ theme }) => theme.breakpoints.xl}) {
    font-size: ${({ theme }) => theme.font.sizes.content.md};
    line-height: 1.5;
  }
  & p {
    margin-top: ${({ theme }) => theme.spacing.p1};
    &:first-child {
      margin-top: 0;
    }
  }
  & h3 {
    margin-bottom: 0;
  }
`;
