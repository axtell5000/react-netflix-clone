import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  margin: 0 20px;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Inner = styled.div`
  margin: auto;
  max-width: 900px;
  position: relative;
  width: 100%;

  video {
    height: 100%;
    width: 100%;
  }
`;

export const Close = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  height: 22px;
  opacity: 0.3;
  position: absolute;
  right: 15px;
  top: 15px;
  width: 22px;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    background-color: #333;
    content: ' ';
    height: 22px;
    left: 10px;
    position: absolute;    
    top: 0;
    width: 2px;    
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export const Button = styled.button`
  align-items: center;
  background-color: #e50914;
  border-color: #ff0a16;
  color: white;
  cursor: pointer;
  display: flex;  
  font-size: 18px;
  font-weight: bold;
  height: 45px;
  justify-content: center;
  padding-left: 0;
  text-transform: uppercase;
  width: 115px;

  &:hover {
    background-color: #ff0a16;
    transform: scale(1.05);    
  }
`;