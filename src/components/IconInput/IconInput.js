import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14 / 16,
    borderWidth: 1,
    padding: 3,
    paddingLeft: 22,
    iconSize: 18,
    strokeWidth: 1,
  },
  large: {
    fontSize: 18 / 16,
    borderWidth: 2,
    padding: 5,
    paddingLeft: 36,
    iconSize: 24,
    strokeWidth: 2,
  },
}

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size]

  if (!styles) {
    throw new Error('Unknown size provided', size)
  }

  return (
    <Wrapper>
      <VisuallyHidden>{icon}</VisuallyHidden>
      <InputIcon
        size={styles.iconSize}
        strokeWidth={styles.strokeWidth}
        id={icon}
      />
      <Input
        placeholder={placeholder}
        style={{
          '--width': width + 'px',
          '--font-size': styles.fontSize + 'rem',
          '--border-width': styles.borderWidth + 'px',
          '--padding-top': styles.padding + 2 + 'px',
          '--padding-bottom': styles.padding + 'px',
          '--padding-left': styles.paddingLeft + 'px',
        }}
        value={label}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
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
  pointer-events: none;
`

const Input = styled.input`
  border: 0;
  color: inherit;
  width: var(--width);
  font-size: var(--font-size);
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  border-bottom: var(--border-width) solid ${COLORS.black};
  padding-top: var(--padding-top);
  padding-bottom: var(--padding-bottom);
  padding-left: var(--padding-left);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 2px;
  }
`


export default IconInput;
