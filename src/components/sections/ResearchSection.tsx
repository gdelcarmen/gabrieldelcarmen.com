import { research } from '../../data/research';
import EntryParagraph from '../EntryParagraph';

const ResearchSection = () => (
  <section id="research">
    <h2 className="section-heading">2. Research experience</h2>
    {research.map((entry) => (
      <EntryParagraph key={entry.id} entry={entry} />
    ))}
  </section>
);

export default ResearchSection;
