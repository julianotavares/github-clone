import React from 'react';
import Heatmap from 'react-calendar-heatmap';

import { Container } from './styles';

const RandomCalendar: React.FC = () => {
  return (
    <Container>
      <div className="wrapper">
        <Heatmap startDate={} endDate={} values={{}} />
      </div>

      <span>Random calendar (do not represent actual data)</span>
    </Container>
  );
};

export default RandomCalendar;
