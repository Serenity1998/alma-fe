import styled from "styled-components";

const CheckboxContainer = styled.label`
  max-width: 100%;
  width: 530px;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  gap: 8px;
  margin-bottom: 8px;
`;

const HiddenCheckbox = styled.input`
  display: none;
`;

const StyledCheckbox = styled.span`
  width: 20px;
  height: 20px;
  border: 2px solid #333;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  transition: all 0.2s ease-in-out;

  ${HiddenCheckbox}:checked + & {
    background-color: #4CAF50;
    border-color: #4CAF50;
  }

  ${HiddenCheckbox}:checked + &::after {
    content: "";
    position: absolute;
    left: 6px;
    top: 2px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

interface VisaCheckboxProps {
    register: any;
    value: string;
    label: string;
}

const VisaCheckbox: React.FC<VisaCheckboxProps> = ({ register, value, label }) => (
    <CheckboxContainer>
        <HiddenCheckbox type="checkbox" {...register("visas", { required: true })} value={value} />
        <StyledCheckbox />
        {label}
    </CheckboxContainer>
);

export default VisaCheckbox