import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const StyledSVG = styled.svg`
  display: block;
  width: 60px;
  height: 60px;
  @media (${props => props.theme.breakpoints.sm}) {
    width: 70px;
    height: 70px;
  }
`;

const Logo = ({ color }) => (
  <StyledSVG viewBox="0 0 60 59" width="70px" height="70px">
    <g id="Canvas" transform="translate(-861 -322)">
      <g id="Group">
        <g id="Fill 1">
          <use xlinkHref="#path0_fill" transform="translate(898.059 363.962)" fill="#FFFFFF" />
        </g>
        <g id="Fill 2">
          <use xlinkHref="#path1_fill" transform="translate(874.235 324.185)" fill="#FFFFFF" />
        </g>
        <g id="Fill 4">
          <use xlinkHref="#path2_fill" transform="translate(902.912 324.185)" fill="#FFFFFF" />
        </g>
        <g id="Fill 7">
          <use xlinkHref="#path3_fill" transform="translate(861 322)" fill="#FFFFFF" />
        </g>
      </g>
    </g>
    <defs>
      <path
        id="path0_fill"
        fillRule="evenodd"
        d="M 5.38888 1.25943L 8.45388 9.63194L 0 12.7178L 1.26313 16.1727L 9.72213 13.1239L 13.2353 11.8645L 8.8641 0L 5.38888 1.25943Z"
      />
      <path
        id="path1_fill"
        fillRule="evenodd"
        d="M 0 21.6022L 7.96372 4.77452L 4.38574 3.14888L 5.88638 0L 12.4598 3.0325L 11.346 5.38102L 11.4213 5.41991C 13.1173 3.97881 15.7318 3.90569 17.6888 4.8131C 20.0374 5.8758 20.9958 7.42861 20.5742 9.96633C 22.3056 8.64193 24.7643 8.07401 26.8419 9.02002C 32.186 11.4852 30.3044 15.464 29.1906 17.7737L 22.4961 31.9083L 19.3046 30.4672L 25.843 16.711C 26.5761 15.197 27.6146 12.6204 25.0352 11.4463C 23.5349 10.7623 20.8052 10.6117 19.3448 13.7174L 12.8464 27.4736L 9.65488 26.0372L 16.1933 12.2809C 16.8861 10.7281 17.9597 8.18573 15.3453 7.01132C 13.8852 6.332 11.1552 6.17672 9.69511 9.28701L 3.1564 23.0433L 0 21.6022Z"
      />
      <path
        id="path2_fill"
        fillRule="evenodd"
        d="M 0 35.2354L 13.6657 4.9843L 9.7627 3.12331L 11.1999 0L 18.0882 3.31329L 3.02354 36.7164L 0 35.2354Z"
      />
      <path
        id="path3_fill"
        fillRule="evenodd"
        d="M 0 28.6827L 3.35254 30.1599L 17.2059 1.52169L 13.853 0L 0 28.6827Z"
      />
    </defs>
  </StyledSVG>
);

Logo.propTypes = {
  color: PT.string,
};

Logo.defaultProps = {
  color: '#fff',
};

export default Logo;
