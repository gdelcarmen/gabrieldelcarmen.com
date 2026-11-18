import { Fragment } from 'react';
import { profile } from '../../data/profile';

const Header = () => (
  <header className="pt-8 md:pt-11">
    <div className="caps text-crimson">Curriculum vitae</div>
    <h1 className="mt-3 text-balance text-[38px] font-bold leading-[1.06] tracking-[-0.012em] md:text-[clamp(38px,4.4vw,60px)]">
      {profile.name}
    </h1>
    <p className="mt-4 text-[19px] leading-[1.4] md:text-[21px]">
      {profile.roles.map((role, index) => (
        <Fragment key={role.title}>
          {index > 0 && ' and '}
          {role.title}
          <sup className="text-[0.6em]">{role.affiliation}</sup>
        </Fragment>
      ))}
    </p>
    <p className="mt-2.5 text-[15px] leading-normal text-body">
      {profile.affiliations.map((affiliation, index) => (
        <span key={affiliation} className="block">
          <sup className="text-[0.7em]">{index + 1}</sup> {affiliation}
        </span>
      ))}
    </p>
  </header>
);

export default Header;
