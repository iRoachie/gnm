import React, { useState } from 'react';

import VideoTile from './VideoTile';

const videoWidth = 300;

export default function VideoTrack({ videos, selectVideo }) {
  const [offset, setOffset] = useState(0);
  const slider = React.createRef();

  const pushLeft = () => {
    if (offset !== 0) {
      setOffset(offset + videoWidth);
    }
  };

  const pushRight = () => {
    setOffset(offset - videoWidth);
  };

  return (
    <article className="mt-8 relative overflow-hidden slider-container">
      <button className="absolute track p-4 left-0 z-10" onClick={pushLeft}>
        <svg width="12" height="23" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M.583 11.108L11.076.704l.911.865-9.949 9.972 9.982 9.97-.949.866L.583 11.973z"
            fill="#FFFFFE"
            fillRule="evenodd"
          />
        </svg>
      </button>

      <div className="slider-track absolute top-0 left-0 w-full" ref={slider}>
        {videos.map((a, i) => (
          <VideoTile
            key={a.id}
            video={a}
            index={i}
            selectVideo={() => selectVideo(i)}
          />
        ))}
      </div>

      <button className="absolute track right-0 z-10 p-4" onClick={pushRight}>
        <svg width="12" height="23" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.864 11.108L1.37.704l-.911.865 9.949 9.972-9.982 9.97.949.866 10.488-10.404z"
            fill="#FFFFFE"
            fillRule="evenodd"
          />
        </svg>
      </button>

      <style jsx>{`
        .track {
          top: 50%;
          transform: translateY(-50%);
          transition: transform 300ms;
        }

        .track:active {
          transform: translateY(-50%) scale(0.9);
        }

        .slider-container,
        .slider-track {
          height: 200px;
        }

        .slider-track {
          transform: translateX(${offset}px);
          transition: transform 500ms;
        }
      `}</style>
    </article>
  );
}
