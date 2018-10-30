import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'

import { css } from 'emotion'

class ScrollButton extends React.Component {
    constructor() {
      super();
  
      this.state = {
          intervalId: 0
      };
    }
    
    scrollStep() {
      if (window.pageYOffset === 0) {
          clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    
    scrollToTop() {
      let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
      this.setState({ intervalId: intervalId });
    }
    
    render () {
        return <div title='Back to top'
        className={css`
          opacity: 1;
  color: ;
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border: none;
  z-index: 1;
  
  &:hover {
    opacity: 1;
  }

.arrow-up {
  color: orange;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -9px;
  margin-left: -5px;
        }
        `} onClick={ () => { this.scrollToTop(); }}>
                  <IconButton>
            <ArrowDropUpIcon className="arrow-up" />
          </IconButton>
                </div>;
     }
  } 

  export default ScrollButton