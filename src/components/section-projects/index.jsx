import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionProjects = ({ publications }) => {
  if (!publications.length) return null;

  return (
    <Section title="Publications">
      {publications.map((publication) => (
        <SummaryItem
          key={publication.name}
          name={publication.name}
          description={publication.description}
          link={publication.link}
        />
      ))}
    </Section>
  );
};

export default SectionProjects;
