import styled from '@emotion/styled';

export const OptionsBtn = styled.button`
  background-color: var(--color-accent);
  color: var(--color-white);
  text-transform: capitalize;
  background-clip: padding-box;
  border: 2px solid transparent;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  padding: 10px 25px;
  position: relative;

  :hover,
  :focus {
    background-color: #fb8332;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    transform: translateY(-1px);
  }

  :active {
    background-color: #c85000;
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  }
`;
