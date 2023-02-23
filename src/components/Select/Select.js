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
      <SelectIcon id="chevron-down" size={24} strokeWidth={1} />
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  // we could use inline-block, we don't want the select to act like an inline element.
  width: max-content;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  border-radius: 8px;
  padding: 12px 52px 12px 16px;

  &:hover {
    color: ${COLORS.black};
  }
`

const SelectedLabel = styled.label``

const NativeSelect = styled.select`
  border: 0;
  border-radius: 8px;
  background-color: transparent;
  color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* safari has some built-in styles that can not be overridden */
  appearance: none;
`

const SelectIcon = styled(Icon)`
  position: absolute;
  right: 12px;
  top: 0;
  bottom: 0;
  margin: auto;
`

export default Select;
