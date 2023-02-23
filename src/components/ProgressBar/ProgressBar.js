/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': 8 + 'px',
    '--border-radius': 4 + 'px',
    '--padding': 0 + 'px',
  },
  medium: {
    '--height': 12 + 'px',
    '--border-radius': 4 + 'px',
    '--padding': 0 + 'px',
  },
  large: {
    '--height': 24 + 'px',
    '--border-radius': 8 + 'px',
    '--padding': 4 + 'px',
  },
}

const ProgressBar = ({ value, size }) => {
  const style = SIZES[size]
  const borderRadius = value === 100 ? '4px' : '4px 0px 0px 4px'
  return (
    <Wrapper style={style}>
      <VisuallyHidden>
        <span id="loadinglabel">Loading:</span>
      </VisuallyHidden>
      <Progress
        role="progressbar"
        aria-labelledby="loadinglabel"
        aria-valuenow={value}
        style={{ '--width': value + '%', '--border-radius': borderRadius }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: var(--height);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
`

const Progress = styled.div`
  width: var(--width);
  height: 100%;
  background-color: ${COLORS.primary};
  border-radius: var(--border-radius);
`


export default ProgressBar;
