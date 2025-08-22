
import React from 'react';
import Hero from '../Hero';
import ServiceSection from '../ServiceSection';

import data from '../../data';

function Home() {
  return (
    <>
      <Hero />
      <ServiceSection items={data} />
     
    </>
  );
}

export default Home;
