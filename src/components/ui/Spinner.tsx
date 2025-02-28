import React from 'react';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

import spinner from '@/assets/icons/spinner.svg';

interface SpinnerProps {
    className?: string;
}

// Define the spin animation
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Styled component for the spinner container
const SpinnerContainer = styled.div<{ className?: string }>`
  display: inline-block;
  width: 1rem; /* Equivalent to w-4 in Tailwind */
  height: 1rem; /* Equivalent to h-4 in Tailwind */
  animation: ${spin} 1s linear infinite; /* Equivalent to animate-spin in Tailwind */
  ${(props) => props.className || ''} /* Allow for additional className props */
`;

const Spinner: React.FC<SpinnerProps> = ({ className }) => {
    return (
        <SpinnerContainer className={className}>
            <Image src={spinner} alt="spinner" />
        </SpinnerContainer>
    );
};

export default Spinner;