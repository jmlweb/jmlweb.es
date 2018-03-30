import styled from 'styled-components';

export default styled.div`
  background: #fff;
  border-bottom: 4px solid ${props => props.theme.colors.primary};
  box-shadow: 0 0 4px ${props => props.theme.colors.shadow};
  min-height: 100vh;
  max-width: ${props => props.theme.sizes.max};
  margin: 0 auto;
  @media (${props => props.theme.breakpoints.xs}) {
    min-height: 0;
  }
  &,
  p,
  li,
  dd,
  input,
  select,
  textarea {
    font-size: ${props => props.theme.fontSize(0)};
    @media (${props => props.theme.breakpoints.sm}) {
      font-size: ${props => props.theme.fontSize(1)};
    }
    @media (${props => props.theme.breakpoints.xl}) {
      font-size: ${props => props.theme.fontSize(2)};
    }
    @media (${props => props.theme.breakpoints.xxl}) {
      font-size: ${props => props.theme.fontSize(3)};
    }
  }
  &,
  p,
  li,
  dd {
    line-height: 1.4;
    @media (${props => props.theme.breakpoints.lg}) {
      line-height: 1.5;
    }
    @media (${props => props.theme.breakpoints.xl}) {
      line-height: 1.55;
    }
  }
  p,
  ol,
  ul,
  li,
  dd {
    margin-top: ${props => props.theme.spacing(1)};
    &:first-child {
      margin-top: 0;
    }
  }
  &,
  input,
  select,
  textarea {
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fontFamily.default};
    -webkit-font-smoothing: antialiased;
  }
  h2,
  h3 {
    margin: 0;
    color: ${props => props.theme.colors.lightGray};
  }
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    &:hover {
      text-decoration: line-through;
      color: ${props => props.theme.colors.dark};
    }
  }
  code {
    font-family: monaco, Consolas, Lucida Console, monospace;
    font-size: 0.8em;
    padding: 4px 6px;
    background: ${props => props.theme.colors.lighter};
    border: 1px solid ${props => props.theme.colors.light};
  }
`;
