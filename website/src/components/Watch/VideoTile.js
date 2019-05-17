import React from 'react';

export default function VideoTile({ selectVideo, video, index }) {
  return (
    <>
      <button
        className={`p-12 text-left leading-none ${
          index === 0 || index % 2 === 0 ? 'bg-primary-400' : 'bg-primary'
        }`}
        onClick={selectVideo}
      >
        <h3 className="text-xl">{video.label}</h3>
        <p className="font-bold text-2xl">{video.title}</p>
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
