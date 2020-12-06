import styled from 'styled-components/macro';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  margin: auto;
  max-width: 80%;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 48px;
  font-weight: 500;
  text-align: center;  
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;

export const Name = styled.p`
  color: #808080;
  font-size: 16px;
  text-overflow: ellipsis;
  
  &:hover {
    color: #e5e5e5;
    font-weight: bold;    
  }
`;

export const Picture = styled.img`
  border: 3px solid black;
  cursor: pointer;  
  height: auto;
  max-width: 150px;
  width: 100%;
`;

export const Item = styled.li`
  list-style-type: none;
  margin-right: 30px;
  max-height: 200px;
  max-width: 200px;  
  text-align: center;  

  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover ${Name} {
    color: white;
    font-weight: bold;    
  }

  &:last-of-type {
    margin-right: 0;
  }
`;