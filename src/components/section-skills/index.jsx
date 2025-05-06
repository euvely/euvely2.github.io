import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionExperiences = ({ experiences }) => {
  return (
    <Section title="Experiences">
      {experiences.map((experience) => (
        <SummaryItem
          key={experience.name}
          name={experience.name}
          description={experience.description}
          link={experience.link}
        />
      ))}
    </Section>
  );
};

export default SectionExperiences;
