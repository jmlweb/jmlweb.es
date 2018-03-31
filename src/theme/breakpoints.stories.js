import React from 'react';
import styled from 'styled-components';
import { stripUnit } from 'polished';
import { storiesOf } from '@storybook/react';

import { breakpointsObj } from './breakpoints';

const StyledBreakpoint = styled.div`
  background: ${props => props.theme.colors.primary};
  width: ${props => props.size};
  height: 400px;
  margin-bottom: 40px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const convertToPx = value => `${Number(stripUnit(value)) * 16}px`;

storiesOf('Theme/Breakpoints', module).add('all', () =>
  Object.keys(breakpointsObj).map(breakpointKey => (
    <StyledBreakpoint size={convertToPx(breakpointsObj[breakpointKey])}>
      {breakpointKey}: {breakpointsObj[breakpointKey]}/{convertToPx(breakpointsObj[breakpointKey])}
    </StyledBreakpoint>
  )));
