import React from 'react';
import PropTypes from 'prop-types';
import {useScrollTrigger, Slide, OutlinedInput} from '@mui/material';
import { styled } from "@mui/material/styles";



export function HideOnScroll(props) {
    const { children, window } = props;
    
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
   
    window: PropTypes.func,
  };

  
export const StyledOutlinedInput = styled(OutlinedInput)(
  ({ theme }) => `
  width: 250px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 10px;
  height: 40px
  `
);