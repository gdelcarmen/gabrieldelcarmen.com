import { profile } from '../../data/profile';

const AuthorNoteSection = () => (
  <section id="author-note" className="mt-9 border-t-[3px] border-ink pt-[18px]">
    <h2 className="caps mb-2.5">Author note</h2>
    <p className="max-w-[40rem] text-base">{profile.authorNote}</p>
  </section>
);

export default AuthorNoteSection;
