import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14 / 16,
    borderWidth: 1,
    height: 24 / 16,
    iconSize: 16,
    strokeWidth: 1,
  },
  large: {
    fontSize: 18 / 16,
    borderWidth: 2,
    height: 36 / 16,
    iconSize: 24,
    strokeWidth: 2,
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated
}) => {
  const styles = STYLES[size]

  if (!styles) {
    throw new Error('Unknown size provided', size)
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <InputIcon
        size={styles.iconSize}
        strokeWidth={styles.strokeWidth}
        id={icon}
      />
      <Input
        placeholder={placeholder}
        style={{
          '--width': width + 'px',
          '--height': styles.height + 'rem',
          '--font-size': styles.fontSize + 'rem',
          '--border-width': styles.borderWidth + 'px',
        }}
        value={label}
        {...delegated}
      />
    </Wrapper>
  )
}

// when you click anything inside label, it auto select the input.
const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  width: max-content;

  &:hover {
    color: ${COLORS.black};
  }
`

const InputIcon = styled(Icon)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`

const Input = styled.input`
  border: 0;
  color: inherit;
  width: var(--width);
  height: var(--height);

  font-size: var(--font-size);
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  border-bottom: var(--border-width) solid ${COLORS.black};
  padding-left: var(--height);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 2px;
  }
`


export default IconInput;
