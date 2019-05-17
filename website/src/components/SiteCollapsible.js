import React from 'react';

export default function SiteCollapsible({ title, sites, open, onOpen }) {
  return (
    <article className="mb-4">
      <button
        className="bg-accent font-bold px-4 py-1 w-full sm:w-auto"
        onClick={onOpen}
      >
        {title}
      </button>

      <div className="mt-4 collapse overflow-hidden">
        {sites.map(a => (
          <a
            key={a.id}
            href={a.location}
            className="flex mb-4"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              className="icon mr-4"
              width="372"
              height="512"
              viewBox="0 0 372 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M186 0C83.755 0 .573 83.182.573 185.426c0 126.888 165.939 313.167 173.004 321.035 6.636 7.391 18.222 7.378 24.846 0 7.065-7.868 173.004-194.147 173.004-321.035C371.425 83.182 288.244 0 186 0zm0 278.719c-51.442 0-93.292-41.851-93.292-93.293 0-51.442 41.851-93.292 93.292-93.292s93.291 41.851 93.291 93.293c0 51.442-41.85 93.292-93.291 93.292z"
                fill={a.location ? '#ED2087' : 'gray'}
                fillRule="nonzero"
              />
            </svg>

            <span>{a.name}</span>
          </a>
        ))}
      </div>

      <style jsx>{`
        .collapse {
          transition: max-height 500ms ease;
          max-height: ${open ? `${40 * sites.length}px` : '0'};
        }

        .icon {
          height: 25px;
          width: auto;
        }
      `}</style>
    </article>
  );
}
