import { profile } from '../../data/profile';

const AbstractSection = () => (
  <section
    id="abstract"
    className="mt-7 flex flex-wrap gap-x-12 gap-y-6 border-b border-t-[3px] border-ink pb-[22px] pt-5 md:mt-8"
  >
    <div className="min-w-0 flex-[2_1_480px]">
      <h2 className="caps mb-2.5">Abstract</h2>
      <div className="flex flex-col gap-2.5 text-[17px] md:text-lg">
        {profile.abstract.map((paragraph) => (
          <p key={paragraph} className="text-pretty">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
    <div className="min-w-0 flex-[1_1_240px] font-sans text-sm text-body">
      <h2 className="caps mb-1.5 text-ink">Keywords</h2>
      <p className="mb-3.5">{profile.keywords.join('; ')}</p>
      <h2 className="caps text-ink">Correspondence</h2>
      <div className="flex flex-col items-start">
        {profile.correspondence.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="link-crimson inline-flex min-h-[44px] items-center break-all print:min-h-0"
            {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default AbstractSection;
