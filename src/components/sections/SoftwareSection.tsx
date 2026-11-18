import { software } from '../../data/software';
import EntryParagraph from '../EntryParagraph';

const SoftwareSection = () => (
  <section id="software" className="mb-7">
    <h2 className="section-heading">3. Software and clinical AI</h2>
    {software.map((entry) => (
      <EntryParagraph key={entry.id} entry={entry} />
    ))}
  </section>
);

export default SoftwareSection;
