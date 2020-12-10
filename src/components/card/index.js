import React, { useState, useContext, createContext } from 'react';

import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FEatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Entities,
  Item,
  Image
} from './styles/card';

export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
  // some state
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    // setting up so this part of context goes to this part of App
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

// Holds all the cards
Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

// Hold information about series / film
Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Item = function CardItem({ item ,children, ...restProps }) {
  // pulling state from the context
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  
  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};