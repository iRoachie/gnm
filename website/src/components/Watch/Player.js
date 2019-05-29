import React from 'react';

const Player = ({ youtubeId }) => (
  <>
    <div className="video-container relative mx-auto">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        width="560"
        height="315"
        name="Video Player"
        src={`https://www.youtube.com/embed/${youtubeId}?showinfo=0&rel=0`}
        frameBorder="0"
        allowFullScreen
      />
    </div>

    <style jsx>{`
      .video-container {
        height: calc(100vw / 16 * 9);
        max-height: calc(1108px / 16 * 9);
        max-width: calc(1140px - 2rem);
      }
    `}</style>
  </>
);

export default Player;
