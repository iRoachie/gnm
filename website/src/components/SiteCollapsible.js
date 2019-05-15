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
          <p className="mb-4" key={a}>
            {a}
          </p>
        ))}
      </div>

      <style jsx>{`
        .collapse {
          transition: max-height 300ms ease;
          max-height: ${open ? '500px' : '0'};
        }
      `}</style>
    </article>
  );
}
