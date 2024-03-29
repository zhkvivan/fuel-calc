import styled from 'styled-components';
import { primaryColor } from '../Globals';

const Btn = styled.button`
  min-width: 48%;
  background-color: ${({ primary }) => (primary ? primaryColor : 'white')};
  color: ${({ primary }) => (primary ? 'white' : primaryColor)};
  border: 2px solid ${primaryColor};
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  padding: 1rem 3rem;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ primary }) => (primary ? 'white' : primaryColor)};
    color: ${({ primary }) => (primary ? primaryColor : 'white')};
  }
`;

const Button = ({ label, primary, handler }) => {
  return (
    <Btn primary={primary} onClick={handler}>
      {label}
    </Btn>
  );
};

export default Button;
