import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.div`
  background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;
  display: flex;
  flex-direction: column;
  

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;  
  height: 64px;
  justify-content: space-between;
  margin: 0 56px;
  padding: 18px 0;  

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }

`;

export const Logo = styled.img`
  height: 32px;  
  margin-right: 40px;
  width: 108px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

// to style a react specific thing
export const ButtonLink = styled(ReachRouterLink)`
  background-color: #e50914;
  border: 0;
  border-radius: 3px;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: block;
  font-size: 15px;
  height: fit-content;
  padding: 8px 17px; 
  text-decoration: none;  
  width: 84px;

  &:hover {
    background: #f40612;
  }
`;

export const Link = styled.p`
  color: #fff;
  cursor: pointer;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  margin-right: 30px;
  text-decoration: none;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Group = styled.div`
  align-items: center;
  display: flex;  
`;

// this allows us to use the style from Container as well
export const Feature = styled(Container)`
  align-items: normal;
  flex-direction: column;
  padding: 150px 0 500px 0;  
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  cursor: pointer;  
  height: 32px;
  width: 32px;
  
`;

export const Dropdown = styled.div`
  background-color: black;
  display: none;
  padding: 10px;
  position: absolute;
  top: 32px;
  right: 10px;
  width: 100px;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link} {
      cursor: pointer;
    }

    ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  align-items: center;
  display: flex;  
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  font-weight: bold;
  line-height: normal;
  margin: 0 0 20px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);  
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Search = styled.div`
  align-items: center;
  display: flex;  

  svg {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  outline: 0;  
  padding: 0;  
  width: 32px;  

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const SearchInput = styled.input`
  background-color: rgba(64, 64, 64, 0.5);  
  border: 1px solid white;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  height: 30px;    
  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};  
  transition: width 0.5s;
  width: ${({ active }) => (active === true ? '200px' : '0px')};

  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const PlayButton = styled.button`
  background-color: #e6e6e6;
  border-radius: 5px;
  border-width: 0;
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);  
  color: #000;
  cursor: pointer;  
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;  
  max-width: 130px;  
  padding: 10px 20px;
  transition: background-color 0.5s ease;
  
  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`