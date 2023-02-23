/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: 8,
    radius: 4,
    padding: 0,
  },
  medium: {
    height: 12,
    radius: 4,
    padding: 0,
  },
  large: {
    height: 16,
    radius: 8,
    padding: 4,
  },
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size]
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        '--padding': styles.padding + 'px',
        '--radius': styles.radius + 'px',
      }}
    >
      <BarWrapper>
        <Bar
          // we apply the height in the child instead of the parent. since we usually look down the tree to decide the height itself.
          style={{ '--width': value + '%', '--height': styles.height + 'px' }}
        >
          <VisuallyHidden>{value}%</VisuallyHidden>
        </Bar>
      </BarWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: var(--height);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
`

const BarWrapper = styled.div`
  /* trim off corner when progress bar is near full */
  overflow: hidden;
  border-radius: 4px;
  height: 100%;
`

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`


export default ProgressBar;
