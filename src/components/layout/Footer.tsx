import { profile } from '../../data/profile';

const Footer = () => (
  <footer className="mt-9 flex flex-wrap items-center justify-between gap-x-6 border-t border-rule pt-1 font-sans text-[13px] leading-[44px] text-muted">
    <span>
      © {new Date().getFullYear()} {profile.name}
    </span>
    <span className="leading-normal sm:leading-[44px]">{profile.disclaimer}</span>
  </footer>
);

export default Footer;
