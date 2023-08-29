import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the loader animation
const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Styled component for the loader
const LoaderWrapper = styled.div`
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-top: 4px solid #333;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spinAnimation} 1s linear infinite;
`;

const Loader = () => {
  return <LoaderWrapper />;
};

export default Loader;
