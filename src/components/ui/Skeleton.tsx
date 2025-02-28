import styled, { keyframes } from 'styled-components';

export interface SkeletonProps {
    height: string;
    width: string;
}

// Define the pulse animation
const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

// Styled component for the skeleton
const SkeletonWrapper = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 0.375rem; /* Equivalent to rounded-md in Tailwind */
  background-color: #e5e7eb; /* Equivalent to bg-gray-200 in Tailwind */
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; /* Equivalent to animate-pulse in Tailwind */
`;

const Skeleton = (props: SkeletonProps) => {
    return <SkeletonWrapper width={props.width} height={props.height} />;
};

export default Skeleton;