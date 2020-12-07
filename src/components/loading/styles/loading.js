import styled, { createGlobalStyle } from 'styled-components';

// because these two style are targetting the body element, we must create a global style
export const LockBody = createGlobalStyle`
  body {
    overflow: hidden;
    color: #ffff00 !important;    
  }
`;

export const ReleaseBody = createGlobalStyle`
  body {
    overflow: visible;
  }
`;

// for the actual spinner
export const Spinner = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 999;

  :after {    
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-name: spin;
    animation-timing-function: linear;
    background-image: url(/images/misc/spinner.png);
    background-repeat: no-repeat;
    background-size: contain;    
    content: '';
    height: 150px;
    left: 50%;
    margin: -150px 0 0 -75px;
    position: absolute;
    top: 50%;
    width: 150px;
  }

  @-ms-keyframes spin {
    from {
      -ms-transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
    }
  }

  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Picture = styled.img`  
  height: 50px;
  left: 50%;
  margin: -100px 0 0 -22px;
  position: absolute;
  top: 50%;
  width: 50px;
`;