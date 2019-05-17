import React, { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return width;
}

function calculateVideoWidth(width) {
  return (width / 16) * 9;
}

export default function Player({ youtubeId }) {
  const width = useWindowWidth();
  const [videoHeight, setVideoHeight] = useState(calculateVideoWidth(width));

  useEffect(() => {
    setVideoHeight(calculateVideoWidth(width > 1108 ? 1108 : width));
  }, [width]);

  return (
    <>
      <div className="video-container relative mx-auto">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${youtubeId}?showinfo=0&rel=0`}
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <style jsx>{`
        .video-container {
          min-height: ${videoHeight}px;
          max-width: calc(1140px - 2rem);
        }
      `}</style>
    </>
  );
}
