import React from 'react';

export default function VideoTile({ selectVideo, video, index }) {
  return (
    <>
      <button
        className={`p-12 text-left ${
          index === 0 || index % 2 === 0 ? 'bg-primary-400' : 'bg-primary'
        }`}
        onClick={selectVideo}
      >
        <h3>{video.label}</h3>
        <p className="font-bold text-xl">{video.title}</p>
      </button>

      <style jsx>
        {`
          button {
            height: 200px;
            width: 300px;
          }
        `}
      </style>
    </>
  );
}
