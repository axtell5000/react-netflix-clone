import React from 'react';

import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';
import { BrowseContainer } from '../containers/Browse';

export default function Browse() {
  // need series and film data
  const { series } = useContent('series');
  const { films } = useContent('films');
  
  // need sliders
  const slides = selectionFilter( { series, films });
  
  // pass them to the browse container
  return (
    <BrowseContainer slides={slides} />
  );
}
