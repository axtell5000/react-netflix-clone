import React from 'react';

import { useContent } from '../hooks';

export default function Browse() {
  // need series and film data
  const { series } = useContent('series');
  const { films } = useContent('films');
  console.log(films);   
  // need sliders
  // pass them to the browse container
  return (
    <p>Hello from browse</p>
  );
}
