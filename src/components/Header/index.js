import React from 'react';
import PT from 'prop-types';

import LinkedLogo from './components/LinkedLogo';
import Main from './components/Main';
import TopMenu from './components/TopMenu';
import Wrapper from './components/Wrapper';

const Header = ({ title }) => (
  <Main>
    <Wrapper>
      <LinkedLogo title={title} />
      <TopMenu />
    </Wrapper>
  </Main>
);

Header.propTypes = {
  title: PT.string.isRequired,
};

export default Header;
