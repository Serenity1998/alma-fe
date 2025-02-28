import React from 'react';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

import spinner from '@/assets/icons/spinner.svg';

interface SpinnerProps {
  className?: string;
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div<{ className?: string }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  animation: ${spin} 1s linear infinite;
  ${(props) => props.className || ''}
`;

const Spinner: React.FC<SpinnerProps> = ({ className }) => {
  return (
    <SpinnerContainer className={className}>
      <Image src={spinner} alt="spinner" />
    </SpinnerContainer>
  );
};

export default Spinner;