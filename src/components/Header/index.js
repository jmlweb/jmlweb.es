import React from 'react';
import PT from 'prop-types';

import LinkedLogo from './components/LinkedLogo';
import Wrapper from './components/Wrapper';
import TopMenu from './components/TopMenu';
import Row from './components/Row';

const Header = ({ title }) => (
  <Wrapper>
    <Row>
      <LinkedLogo title={title} />
      <TopMenu />
    </Row>
  </Wrapper>
);

Header.propTypes = {
  title: PT.string.isRequired,
};

export default Header;
