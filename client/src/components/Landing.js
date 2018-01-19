import React from 'react';
import SurveyListBL from './surveys/SurveyListBL';
const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        Parcel Hero
      </h1>
      <SurveyListBL />
    </div>
  );
};

export default Landing;
