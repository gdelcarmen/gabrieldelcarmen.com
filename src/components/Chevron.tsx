// Disclosure chevron: points down when closed, up when open.
const Chevron = ({ open, className = '' }: { open: boolean; className?: string }) => (
  <svg
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`chevron shrink-0 ${open ? 'rotate-180' : ''} ${className}`}
  >
    <path d="M4 6l4 4 4-4" />
  </svg>
);

export default Chevron;
