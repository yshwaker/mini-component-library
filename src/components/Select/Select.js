import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <Wrapper>
      <SelectedLabel>{displayedValue}</SelectedLabel>
      <SelectIcon id="chevron-down" size={24} strokeWidth={2} />
      <SelectElem value={value} onChange={onChange}>
        {children}
      </SelectElem>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: 1rem;
  border-radius: 8px;
  padding: 12px 52px 12px 16px;

  &:hover {
    color: ${COLORS.black};
  }
`

const SelectedLabel = styled.label``

const SelectElem = styled.select`
  border: 0;
  background-color: transparent;
  color: transparent;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &:focus {
    opacity: 1;
  }
`

const SelectIcon = styled(Icon)`
  /* display: inline-block;
  vertical-align: middle; */
  position: absolute;
  right: 12px;
  top: 0;
  bottom: 0;
  margin: auto;
`

export default Select;
