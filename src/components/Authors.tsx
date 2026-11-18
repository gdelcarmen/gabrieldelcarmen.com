import { Fragment } from 'react';
import { OWN_NAME } from '../data/publications';

// An author list with the CV author's own name set in bold.
const Authors = ({ list }: { list: string }) => {
  const parts = list.split(OWN_NAME);
  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={index}>
          {index > 0 && <b>{OWN_NAME}</b>}
          {part}
        </Fragment>
      ))}
    </>
  );
};

export default Authors;
