import { training } from '../../data/training';

const TrainingSection = () => (
  <section id="training" className="mb-7">
    <h2 className="section-heading">1. Training and credentials</h2>
    {training.map((entry) => (
      <p key={entry.id} id={entry.id} className="mb-3 last:mb-0">
        <b>{entry.lead}</b> {entry.text}
      </p>
    ))}
  </section>
);

export default TrainingSection;
